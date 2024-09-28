import BaseWindow from '../baseWindow/baseWindow';
import BaseGauge from '../baseGauge/BaseGauge';
import enumsStore from '../../Stores/enumsStore.json';
import colorStor from "../../Stores/ColorStore.json"
import dataInfo from '../../Stores/dataInfo';
import { createDataConnection } from '../../Api/webSockets';
import { useState } from 'react';

function GeneralSecton({ gridArea }) {
    const [RPM, setRpm] = useState(0);
    const [SPEED, setSpeed] = useState(0);
    const [COOLANT_TEMP, setCollantTemp] = useState(0);
    const TITEL = 'GENERAL INFO'

    const eventObj = {
        RPM: setRpm,
        SPEED: setSpeed,
        COOLANT_TEMP: setCollantTemp
    };

    createDataConnection(enumsStore.dataSections.general, eventObj);

    const layoutGrid =
        '[row1-start] ". SPEED SPEED ." auto [row1-end] \
         [row2-start] "RPM RPM COOLANT_TEMP COOLANT_TEMP" auto [row2-end] \
            / auto auto auto auto auto';

    return (
        <BaseWindow
            gridArea={gridArea}
            // layoutGrid={layoutGrid}
            shadowColor={colorStor.shadow.orenge}
            shadowH={enumsStore.shadowDirection.up}
            shadowV={enumsStore.shadowDirection.right}
            titel={TITEL}
            content={
                <div
                    style={{
                        width: '100%',
                        height: '90%',
                        display: 'grid',
                        gridTemplate: layoutGrid,
                        gap: '0%',
                    }}
                >
                    <BaseGauge layoutPart={'RPM'} sectionData={ RPM} {...dataInfo.RPM} />
                    <BaseGauge layoutPart={'SPEED'} sectionData={SPEED} {...dataInfo.SPEED} />
                    <BaseGauge
                        layoutPart={'COOLANT_TEMP'}
                        sectionData={COOLANT_TEMP}
                        {...dataInfo.COOLANT_TEMP}
                    />
                    {/* <BaseGauge layoutPart={'RELATIVE_ACCEL_POS'} sectionData={RELATIVE_ACCEL_POS} {...dataInfo.RELATIVE_ACCEL_POS} /> */}

                    {/* <BaseGauge layoutPart={'RPM'} sectionData={399} {...dataInfo.RPM} />
                    <BaseGauge layoutPart={'SPEED'} sectionData={455} {...dataInfo.SPEED} />
                    <BaseGauge
                        layoutPart={'COOLANT_TEMP'}
                        sectionData={45}
                        {...dataInfo.COOLANT_TEMP}
                    /> */}
                </div>
            }
        />
    );
}

export default GeneralSecton;
