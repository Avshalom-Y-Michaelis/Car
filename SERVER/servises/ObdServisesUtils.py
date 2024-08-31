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


def getAllErrors():
    return ObdConnection().connection.query(obd.commands.GET_DTC)

def resetErrors():
    ObdConnection().connection.query(obd.commands.CLEAR_DTC)
