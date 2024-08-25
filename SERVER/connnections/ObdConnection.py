import obd

class ObdConnection(object):
  _CONNECTION_STRING = "COM7"
  connection = obd.Async(_CONNECTION_STRING)

  def __new__(selfe):         
         if not hasattr(selfe, 'instance'):
             selfe.instance = super(ObdConnection, selfe).__new__(selfe)

         if not selfe.instance.connection.is_connected():
            selfe.instance.connection.close()
            selfe.instance.connection = obd.Async(selfe._CONNECTION_STRING)

         return selfe.instance
