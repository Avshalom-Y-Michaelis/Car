import obd
from connnections.ObdConnection import ObdConnection
import json

def getfile(filePath):
    with open(filePath) as file:
        return json.load(file)
    
    
def getSectionKeys(sectionName):
    data = getfile('./data/obdData.json')    
    
    return data[sectionName]

def getWhatcCallbackFunc(sectionName ,recordName, emitData):
    def func(res):
        emitData(f'/{sectionName}' ,{"name": recordName ,"value": str(res.value).split(" ")[0]})
    return func

def startAllWhach(emitData):
    datafile =  getfile('./data/obdData.json')
    ObdConnection().connection.stop()

    for section in datafile:
        sectionData = datafile[section]

        for recordName in sectionData:
            ObdConnection().connection.watch(obd.commands[recordName], callback=getWhatcCallbackFunc(section, recordName,emitData) ,force=True)

    ObdConnection().connection.start()
