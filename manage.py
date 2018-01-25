from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from commands.init_db import InitDbCommand
from sbb import application, db

import sys, os
curDir = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, curDir)

migrate = Migrate(application, db)

manager = Manager(application)
manager.add_command('db', MigrateCommand)
manager.add_command('initdb', InitDbCommand)

if __name__ == '__main__':
    manager.run()
