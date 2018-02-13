
from flask import Flask, g, session, flash
from flask_admin import Admin
from flask_debugtoolbar import DebugToolbarExtension
from flask_login import LoginManager, current_user
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
# from flask_wtf.csrf import CSRFProtect
from forms import csrf
from werkzeug.contrib.fixers import ProxyFix
from views.home import home
from views.profile import userprofile
from views.admin import MyAdminIndexView, UserModelView, AccountModelView, WithdrawModelView

from pytz import utc
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor

import datetime
import time
import os

application = Flask(__name__)
admin = Admin(application, index_view=MyAdminIndexView(), base_template='admin/my_master.html', template_mode='bootstrap3')


# config
application.config.from_object('config.ProductionConfig')
application.config['PMSECRET'] = os.environ['PMSECRET'] if application.config['PMSECRET'] == '' else application.config['PMSECRET']
application.config['MAIL_USERNAME'] = os.environ['MAIL_USERNAME'] if application.config['MAIL_USERNAME'] == '' else application.config['MAIL_USERNAME']
application.config['MAIL_PASSWORD'] = os.environ['MAIL_PASSWORD'] if application.config['MAIL_PASSWORD'] == '' else application.config['MAIL_PASSWORD']
application.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI'] if application.config['SQLALCHEMY_DATABASE_URI'] == '' else application.config['SQLALCHEMY_DATABASE_URI']


# CSRFProtect
csrf.init_app(application)

# DB manager
db = SQLAlchemy(application)

# Email
mail = Mail(application)

# user login
login_manager = LoginManager()
login_manager.init_app(application)
login_manager.login_view = 'home.login'

# debuging
dtb = DebugToolbarExtension(application)


########## Scheduler ##########

jobstores = {
    # 'mongo': MongoDBJobStore(),
    'default': SQLAlchemyJobStore(url=application.config['SQLALCHEMY_DATABASE_URI'])
}
executors = {
    'default': ThreadPoolExecutor(20),
    'processpool': ProcessPoolExecutor(5)
}
job_defaults = {
    'coalesce': False,
    'max_instances': 3
}
scheduler = BackgroundScheduler(jobstores=jobstores, executors=executors, job_defaults=job_defaults, timezone=utc)

@scheduler.scheduled_job('cron', id="job_id", day='*', hour=0, minute=0, second=0)
def reward_investments():
    #print('Tick! The time is: %s' % datetime.now())
    from models import AccountInvestments
    from sbb import db

    accInvs = AccountInvestments.query.filter_by(isActive=1).all()
    for ai in accInvs:
    	perc = ai.investmentPlan.percentage
    	ai.currentBalance += float(float(ai.initialInvestment/100)*perc)
    	db.session.add(ai)
	db.session.commit()    

scheduler.start()


###############################

@login_manager.user_loader
def load_user(user_id):
	from models import User
	return User.query.get(user_id)

@application.before_request
def before_request():
	session.permanent = True
	application.permanent_session_lifetime = datetime.timedelta(minutes=application.config['SESSION_TIMEOUT'])
	session.modified = True
	g.user = current_user

@application.context_processor
def inject_finance():
	from models import AccountInvestments
	if current_user.is_authenticated:
		investments = AccountInvestments.query.filter_by(accountId=current_user.account.id, isActive=1).all()
		invusd = float(0)
		ernusd = float(0)
		invbtc = float(0)
		ernbtc = float(0)
		for i in investments:
			if i.paymentSystemId in [1, 3]:
				invusd += i.initialInvestment
				ernusd += i.currentBalance - i.initialInvestment
			elif i.paymentSystemId in [2, 4]:
				invbtc += i.initialInvestment
				ernbtc += i.currentBalance - i.initialInvestment
		return dict(g_invusd=invusd, g_ernusd=ernusd, g_invbtc=invbtc, g_ernbtc=ernbtc)
	return dict()

from lib import filters

from models import User
admin.add_view(UserModelView(User, db.session))
from models import Account
admin.add_view(AccountModelView(Account, db.session))
from models import Withdraws
admin.add_view(WithdrawModelView(Withdraws, db.session))

# register views
application.register_blueprint(home)
application.register_blueprint(userprofile)

application.wsgi_app = ProxyFix(application.wsgi_app)
if __name__ == '__main__':
  application.run()
