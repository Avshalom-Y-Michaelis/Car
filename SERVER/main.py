import os
import sys
import obd
from flask import Flask


app = Flask(__name__)

@app.route("/data/engion")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

# connection = obd.OBD("COM7")
# print(connection.query(obd.commands["GET_DTC"]).value) # returns unit-bearing values thanks to Pint
# # send the command, and parse the response
# connection.close()

# ports = obd.scan_serial()
# print(ports)





print(response.value) # returns unit-bearing values thanks to Pint
print(response.value.to("mph")) # user-friendly unit conversions



