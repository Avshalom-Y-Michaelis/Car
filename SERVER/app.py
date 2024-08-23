from flask import Flask
from flask_cors import CORS
import socketio
from servises.ObdServisesUtils import startAllWhach

app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"http://localhost:3000"}})
sio = socketio.Server(cors_allowed_origins="http://localhost:3000")
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)

# pint.util.Quantity

def collbac(data):
    print(data)
    # print(type(str(data.value)))
    # sio.emit("update_data", {"value": str(data.value)})
    sio.emit("update_data", data)

startAllWhach(collbac)

@sio.event
def connect(sid, environ, auth):
    print('connect')



@app.route("/a")
def hello_world():
    return "hellow world"
