import obd

class ObdConnection(object):
  _CONNECTION_STRING = "COM7"
  _connection = None

  def __new__(selfe):
     return selfe.Instanc()

  def Instanc(selfe):
    if selfe._connection.is_connected():
       selfe._connection.close()
       selfe._connection = obd.OBD(selfe._CONNECTION_STRING)

    return selfe._connection