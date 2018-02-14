# This will be used in JINJA2 for filtering data from {{ }}

from sbb import application

@application.template_filter('make_caps')
def caps(text):
    """Convert a string to all caps."""
    return text.uppercase()

@application.template_filter('only_date')
def odate(text):
    return text.strftime('%Y-%m-%d')

@application.template_filter('only_time')
def otime(text):
    return text.strftime('%H:%M:%S')

@application.template_filter('clean_float')
def cfloat(flot):
    sflot = str(flot)
    if sflot.endswith(".0"):
    	return int(flot)
    else :
    	return flot

@application.template_filter('day_distance')
def ddist(dat):
    
    from datetime import date, datetime
    d1 = dat
    d2 = datetime.now()

    return (d2 - d1).days