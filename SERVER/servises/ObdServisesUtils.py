import obd
from connnections.ObdConnection import ObdConnection
import json

def getfile(filePath):
    with open(filePath) as file:
        return json.load(file)

def startAllWhach(emitData):
    datafile =  getfile('./data/obdData.json')
    ObdConnection().connection.stop()

    for section in datafile:
        sectionData = datafile[section]

        for recordName in sectionData:
            print("----------------------------------------------")
            print(recordName)             
            ObdConnection().connection.watch(obd.commands[recordName], callback=lambda res: emitData({"name": sectionData[recordName] ,"value": str(res.value)}) ,force=True)
    
    ObdConnection().connection.start()

<<<<<<< Updated upstream


# respons = None
# for x in range(0x5f):
#     respons[x] =  ObdConnection.Instanc().query(obd.commands[1][x], True).value

# _connection = obd.OBD("COM7")
# respons = dict( [(str(x),str(_connection.query(obd.commands[9][x], True).value)) for x in range(0x0b) ])
# print(_connection.query(obd.commands.ECU_NAME, True).value)
# file = open('./data/MODE1.json')
# json.dump(file, respons)

# with open("./data/MODE9.json", "w") as fid:
#     json.dump(respons, fid, indent=4, sort_keys=True)
=======
def getAllErrors():
    return ObdConnection().connection.query(obd.commands.GET_DTC)

def resetErrors():
    ObdConnection().connection.query(obd.commands.CLEAR_DTC)
>>>>>>> Stashed changes
