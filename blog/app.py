"""Flask Application for Paws Rescue Center."""
from  flask import Flask, render_template, json, request
from Connect import Connect
app = Flask(__name__)


@app.route("/")
def display_home():

    return render_template('home.html',thing_to_say='hello',nome=Connect.conta("", "2020-03-03","2020-12-27"),menu=Connect.menu(""),submenu=Connect.submnu(""))

@app.route("/respo")
def respo():

    return render_template('responsive.html',thing_to_say='hello',conta=Connect.conta("", "2020-03-03","2020-12-27") ,nome=Connect.tab_primanota("", "2020-03-03","2020-12-27"),menu=Connect.menu(""),submenu=Connect.submnu(""))

@app.route("/chisiamo")
def chisiamo():

    return render_template('chisiamo.html',thing_to_say='hello',menu=Connect.menu(""),submenu=Connect.submnu(""))
@app.route("/manifestazioni")
def manifestazioni():

    return render_template('manifestazioni.html',thing_to_say='hello',menu=Connect.menu(""))

@app.route("/slider")
def slider():

    return render_template('basic.htm',thing_to_say='hello',nome=Connect.conta("", "2020-03-03","2020-12-27"))
@app.route("/mugello")
def mugello():

    return render_template('mugello.html',thing_to_say='hello',nome=Connect.conta("", "2020-03-03","2020-12-27"),menu=Connect.menu(""),submenu=Connect.submnu(""))
@app.route("/sanpiero")
def sanpiero():

    return render_template('sanpiero.html',thing_to_say='hello',nome=Connect.conta("", "2020-03-03","2020-12-27"),menu=Connect.menu(""),submenu=Connect.submnu(""))
@app.route("/about")
def about():
    """View function for About Page."""
    return """We are a non-profit organization working as an animal rescue center. 
    We aim to help you connect with the purrfect furbaby for you! 
    The animals you find at our website are rescue animals which have been rehabilitated. 
    Our mission is to promote the ideology of "Adopt, don't Shop"! """
@app.route("/login")
def login_page():
    # Process login
    return "result"
@app.route("/user")
def display_user(name):
    # A string of any length(without slashes) can be assigned to the variable name.
    print(name)

@app.route("/total/<int:amount>")
def display_total_amount(amount):
    # Amount holds the value in int(Only Positive Integers). No other charcter accepted.
    print(amount)

@app.route("/path/<path:sub_path>")
def take_to_subpath(sub_path):
    # Accepts any string with slashes.
    print(sub_path)

@app.route("/key/<uuid:api_key>")
def display_key(api_key):
    # Unique 16 digit UUID. Helpful in API key or token generation/authentication.
    print(api_key)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=3000)