from flask import Flask
from flask_cors import CORS
import socketio
from servises.ObdServisesUtils import startAllWhach

app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"http://localhost:3000"}})
sio = socketio.Server(cors_allowed_origins="http://localhost:3000")
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)

# pint.util.Quantity


startAllWhach(lambda nameSpace,data: sio.emit("update_data",data=data, namespace=nameSpace))

# @sio.event
# def connect(sid, environ, auth):
#     print('connect')

# @sio.event(namespace='/general')
# def connect(sid, environ, auth):
#     print('connect to general')

@app.route("/a")
def hello_world():
    return "hellow world"