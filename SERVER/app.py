from flask import Flask
from flask_cors import CORS
import socketio
from servises import ObdServisesUtils

app = Flask(__name__)
CORS(app,resources={r"/*":{"origins":"http://localhost:3000"}})
sio = socketio.Server(cors_allowed_origins="http://localhost:3000")
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)

# pint.util.Quantity

ObdServisesUtils.startAllWhach(lambda nameSpace,data: sio.emit("update_data",data=data, namespace=nameSpace))

@app.route("/get-all-errors")
def getAllErrors():
    return ObdServisesUtils.getAllErrors()

@app.route("/reset-errors", methods=["POST"])
def resetErrors():
    ObdServisesUtils.resetErrors()
