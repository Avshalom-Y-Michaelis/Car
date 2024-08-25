import BaseWindow from '../baseWindow/baseWindow';
import BaseGauge from '../baseGauge/BaseGauge';
import enumsStore from '../../Stores/enumsStore.json';
import dataInfo from '../../Stores/dataInfo';
import { createDataConnection } from '../../Api/webSockets';
import { useState } from 'react';

function GeneralSecton({ gridArea }) {
    const [RPM, setRpm] = useState(0);
    const [SPEED, setSpeed] = useState(0);
    const [COOLANT_TEMP, setCollantTemp] = useState(0);

    const eventObj = {
        RPM: setRpm,
        SPEED: setSpeed,
        COOLANT_TEMP: setCollantTemp
    };

    createDataConnection(enumsStore.dataSections.general, eventObj);

    const layoutGrid =
        '[row1-start] ". SPEED SPEED ." auto [row1-end] \
        [row2-start] "RPM RPM COOLANT_TEMP COOLANT_TEMP" auto [row2-end] \
        [row3-start] ". RELATIVE_ACCEL_POS RELATIVE_ACCEL_POS ." auto [row3-end] \
            / auto auto auto auto auto';

    return (
        <BaseWindow
            gridArea={gridArea}
            layoutGrid={layoutGrid}
            shadowColor={'#DC9544'}
            shadowH={enumsStore.shadowDirection.down}
            shadowV={enumsStore.shadowDirection.right}
            titel={'GENERAL INFO'}
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
                    {/* <BaseGauge layoutPart={'RPM'} sectionData={ RPM} {...dataInfo.RPM} />
                    <BaseGauge layoutPart={'SPEED'} sectionData={SPEED} {...dataInfo.SPEED} />
                    <BaseGauge
                        layoutPart={'COOLANT_TEMP'}
                        sectionData={COOLANT_TEMP}
                        {...dataInfo.COOLANT_TEMP}
                    />
                    <BaseGauge layoutPart={'RELATIVE_ACCEL_POS'} sectionData={RELATIVE_ACCEL_POS} {...dataInfo.RELATIVE_ACCEL_POS} /> */}

                    <BaseGauge layoutPart={'RPM'} sectionData={3000} {...dataInfo.RPM} />
                    <BaseGauge layoutPart={'SPEED'} sectionData={130} {...dataInfo.SPEED} />
                    <BaseGauge
                        layoutPart={'COOLANT_TEMP'}
                        sectionData={85}
                        {...dataInfo.COOLANT_TEMP}
                    />
                </div>
            }
        />
    );
}

export default GeneralSecton;
