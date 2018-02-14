from flask_wtf import FlaskForm as Form
from wtforms import StringField, PasswordField, TextAreaField, SelectField, RadioField, TextField, FieldList, FormField, IntegerField
from wtforms.validators import Length, Email, DataRequired, EqualTo, NumberRange, Optional, Regexp
from flask_wtf.csrf import CSRFProtect

csrf = CSRFProtect()

class LoginForm(Form):
    email = StringField('E-mail', validators=[Email(), DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    captcha = StringField('Catpcha', validators=[DataRequired()])

class RegistrationForm(LoginForm):
    password_repeat = PasswordField('Repeat password', validators=[DataRequired(), EqualTo('password'), Length(min=8, max=25)])
    username = StringField('Username', validators=[DataRequired()])
    refemail = StringField('Referral', validators=[Optional()])
    pin_number = StringField('Pin number', validators=[DataRequired(), Regexp(regex="\d{4}", message="PIN number should be number with 4 digits")])
    fb = StringField('Facebook', validators=[Optional()])
    skype = StringField('Skype name', validators=[Optional()])
    accept = StringField('Accept', validators=[DataRequired()])

class RequestResetPassordForm(Form):
    email = StringField('E-mail', validators=[Email(), DataRequired()])

class ResetPassordForm(Form):
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8, max=25)])
    password_repeat = PasswordField('Repeat password', validators=[DataRequired(), Length(min=8, max=25), EqualTo('password')])

class DepositForm(Form):
    paymentSystemId = StringField('paymentSystemId', validators=[DataRequired()])
    amount = StringField('amount', validators=[DataRequired(), Regexp(regex="\d+\.\d+|\d+", message="Amount should be positive number")])
    invPlanId = StringField('invPlanId', validators=[DataRequired()])

class WalletsForm(Form):
    pmwallet = StringField('pmwallet')
    bcwallet = StringField('bcwallet')


class WithdrawForm(Form):
    source = StringField('Source', validators=[DataRequired()])
    accWalletId = StringField('accWalletId', validators=[DataRequired()])
    amount = StringField('amount', validators=[DataRequired(), Regexp(regex="\d+\.\d+|\d+", message="Amount should be positive number")])
    pin_number = StringField('Pin number', validators=[DataRequired(), Regexp(regex="\d{4}", message="PIN number should be number with 4 digits")])

class ConfirmWithdrawForm(Form):
    withdrawId = StringField('withdrawId', validators=[DataRequired()])
    accWalletId = StringField('accWalletId', validators=[DataRequired()])
    amount = StringField('amount', validators=[DataRequired(), Regexp(regex="\d+\.\d+|\d+", message="Amount should be positive number")])
    source = StringField('Source', validators=[DataRequired()])
