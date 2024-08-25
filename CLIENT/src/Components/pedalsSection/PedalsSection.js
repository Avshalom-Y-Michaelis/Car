import BaseWindow from '../baseWindow/baseWindow';
import BaseGauge from '../baseGauge/BaseGauge';
import enumsStore from '../../Stores/enumsStore.json';
import dataInfo from '../../Stores/dataInfo';
import { createDataConnection } from '../../Api/webSockets';
import { useState } from 'react';

function PedalsSection({ gridArea }) {
    const layoutGrid =
        '[row1-start] "RELATIVE_ACCEL_POS THROTTLE_POS  RELATIVE_THROTTLE_POS" auto [row1-end] \
            / auto auto auto';

    const [RTHROTTLE_POSPM, setRpm] = useState(0);
    const [SPRELATIVE_ACCEL_POSEED, setSpeed] = useState(0);
    const [RELATIVE_THROTTLE_POS , setCollantTemp] = useState(0);

    const eventObj = {
        RPM: setRpm,
        SPEED: setSpeed,
        COOLANT_TEMP: setCollantTemp,
    };

    createDataConnection(enumsStore.dataSections.general, eventObj);

    return (
        <BaseWindow
            gridArea={gridArea}
            layoutGrid={layoutGrid}
            titel={'PEDALS INFO'}
            shadowH={enumsStore.shadowDirection.up}
            shadowV={enumsStore.shadowDirection.left}
            shadowColor={'#FC3CC8'}
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
                    <BaseGauge layoutPart={'THROTTLE_POS'} />
                    <BaseGauge layoutPart={'RELATIVE_ACCEL_POS'} />
                    <BaseGauge layoutPart={'RELATIVE_THROTTLE_POS'} />
                </div>
            }
        />
    );
}

export default PedalsSection;
/*

import BaseWindow from '../baseWindow/baseWindow';
import BaseGauge from '../baseGauge/BaseGauge';
import enumsStore from '../../Stores/enumsStore.json';
import dataInfo from '../../Stores/dataInfo';
import { createDataConnection } from '../../Api/webSockets';
import { useState } from 'react';

function GeneralSecton({ gridArea }) {


    const layoutGrid =
        '[row1-start] ". SPEED SPEED ." auto [row1-end] \
            [row2-start] "RPM RPM COOLANT_TEMP COOLANT_TEMP" auto [row2-end] \
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
                        display: 'grid',K
                        gridTemplate: layoutGrid,
                        gap: '0%',
                    }}
                >
                    <BaseGauge layoutPart={'RPM'} sectionData={3000} {...dataInfo.RPM} />
                    <BaseGauge layoutPart={'SPEED'} sectionData={110} {...dataInfo.SPEED} />
                    <BaseGauge
                        layoutPart={'COOLANT_TEMP'}
                        sectionData={90}
                        {...dataInfo.COOLANT_TEMP}
                    />
                </div>
            }
        />
    );
}

*/
