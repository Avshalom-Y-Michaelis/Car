import obd
from connnections.ObdConnection import ObdConnection
import json

def getObdSectionData(sectionName):
    sectionData = getSectionKeys(sectionName)

    for recordKey,recordName in sectionData.items():
        sectionData[recordKey] = ObdConnection.Instanc().query(obd.commands[recordName], True).value
    return sectionData

def getSectionKeys(sectionName):
    file = open('./data/obdData.json')
    data = json.load(file)
    file.close()
    
    return data[sectionName]




# respons = None
# for x in range(0x5f):
#     respons[x] =  ObdConnection.Instanc().query(obd.commands[1][x], True).value

_connection = obd.OBD("COM7")
respons = dict( [(str(x),str(_connection.query(obd.commands[9][x], True).value)) for x in range(0x0b) ])
print(_connection.query(obd.commands.ECU_NAME, True).value)
file = open('./data/MODE1.json')
json.dump(file, respons)

with open("./data/MODE9.json", "w") as fid:
    json.dump(respons, fid, indent=4, sort_keys=True)
