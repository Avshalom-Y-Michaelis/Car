from flask import Flask, render_template, Response
from flask_cors import CORS
import socketio
from servises import ObdServisesUtils
import cv2


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

@app.route('/cameras/revers')
def index():
    return render_template('video.html')


#2 == cupmputer camera
#1 == usb camera
camera=cv2.VideoCapture(1)
def generate_frames():
    while True:
            
        ## read the camera frame
        success,frame=camera.read()
        if not success:
            break
        else:
            ret,buffer=cv2.imencode('.jpg',frame)
            frame=buffer.tobytes()

        yield(b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/video')
def video():
    return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')