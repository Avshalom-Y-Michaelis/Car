from flask import Flask
from servises.ObdServisesUtils import getObdSectionData

app = Flask(__name__)

@app.route("/data/engion")
def getObdSectionData():
    return getObdSectionData("engion")

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"