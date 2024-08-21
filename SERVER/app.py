from flask import Flask
# from flask_socketio import SocketIO, emit
from flask_cors import CORS
import socketio

# from servises.ObdServisesUtils import getObdSectionData

app = Flask(__name__)
# app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"http://localhost:3000"}})
# socketio = SocketIO(app,cors_allowed_origins="http://localhost:3000")
sio = socketio.Server(cors_allowed_origins="http://localhost:3000")
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)
app.run()
# @app.route("/data/engion")
@sio.event
def connect(sid, environ, auth):
    print('connect ', sid)
    sio.emit('my event', {'data': 'foobar'})


    # return getObdSectionData("engion")

@app.route("/a")
def hello_world():
    return "hellow world"
