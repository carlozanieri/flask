import sys

activate_this = '/home/carlo/blog/app.py'
#execfile(activate_this, dict(__file__=activate_this))
with open(activate_this) as f:
    code = compile(f.read(), activate_this, 'exec')
    exec(code, dict(__file__=activate_this))

    sys.path.insert(0, '/home/carlo/flask')
    sys.path.insert(0, '/home/carlo/flask/blog')

   from linuxmugello import app as application