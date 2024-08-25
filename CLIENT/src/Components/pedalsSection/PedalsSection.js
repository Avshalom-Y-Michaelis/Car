import BaseWindow from '../baseWindow/baseWindow';
import BaseGauge from '../baseGauge/BaseGauge';
import enumsStore from '../../Stores/enumsStore.json';
import dataInfo from '../../Stores/dataInfo';
import { createDataConnection } from '../../Api/webSockets';
import { useState } from 'react';

function PedalsSection({ gridArea }) {
    const layoutGrid =
        '[row1-start] "THROTTLE_POS ABSOLUTE_LOAD" auto [row1-end] \
            / auto auto ';

    const [THROTTLE_POS, setThrottelPos] = useState(0);
    const [ABSOLUTE_LOAD, setAabsoluteLoad] = useState(0);

    const eventObj = {
        THROTTLE_POS: setThrottelPos,
        ABSOLUTE_LOAD: setAabsoluteLoad,
    };

    createDataConnection(enumsStore.dataSections.engion, eventObj);

    return (
        <BaseWindow
            gridArea={gridArea}
            layoutGrid={layoutGrid}
            titel={'ENGION INFO'}
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
                    {/* <BaseGauge layoutPart={'THROTTLE_POS'} sectionData={THROTTLE_POS} {...dataInfo.THROTTLE_POS} />
                    <BaseGauge layoutPart={'ABSOLUTE_LOAD'} sectionData={ABSOLUTE_LOAD} {...dataInfo.ABSOLUTE_LOAD} /> */}
                    <BaseGauge
                        layoutPart={'THROTTLE_POS'}
                        sectionData={90}
                        {...dataInfo.THROTTLE_POS}
                    />
                    <BaseGauge
                        layoutPart={'ABSOLUTE_LOAD'}
                        sectionData={180}
                        {...dataInfo.ABSOLUTE_LOAD}
                    />
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
