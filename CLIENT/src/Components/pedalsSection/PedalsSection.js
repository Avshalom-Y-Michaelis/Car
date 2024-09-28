import BaseWindow from '../baseWindow/baseWindow';
import BaseGauge from '../baseGauge/BaseGauge';
import enumsStore from '../../Stores/enumsStore.json';
import dataInfo from '../../Stores/dataInfo';
import colorStor from '../../Stores/ColorStore.json';
import { createDataConnection } from '../../Api/webSockets';
import { useState } from 'react';

function PedalsSection({ gridArea }) {
    const [THROTTLE_POS, setThrottelPos] = useState(0);
    const [ABSOLUTE_LOAD, setAabsoluteLoad] = useState(0);
    const TITEL = 'ENGION INFO'

    const eventObj = {
        THROTTLE_POS: setThrottelPos,
        ABSOLUTE_LOAD: setAabsoluteLoad,
    };

    createDataConnection(enumsStore.dataSections.engion, eventObj);

    const layoutGrid =
        '[row1-start] "THROTTLE_POS ABSOLUTE_LOAD" auto [row1-end] \
            / auto auto ';

    return (
        <BaseWindow
            gridArea={gridArea}
            layoutGrid={layoutGrid}
            titel={TITEL}
            shadowH={enumsStore.shadowDirection.down}
            shadowV={enumsStore.shadowDirection.left}
            shadowColor={colorStor.shadow.pink}
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
                    <BaseGauge layoutPart={'THROTTLE_POS'} sectionData={THROTTLE_POS} {...dataInfo.THROTTLE_POS} />
                    <BaseGauge layoutPart={'ABSOLUTE_LOAD'} sectionData={ABSOLUTE_LOAD} {...dataInfo.ABSOLUTE_LOAD} />
                    {/* <BaseGauge
                        layoutPart={'THROTTLE_POS'}
                        sectionData={120}
                        {...dataInfo.THROTTLE_POS}
                    />
                    <BaseGauge
                        layoutPart={'ABSOLUTE_LOAD'}
                        sectionData={180}
                        {...dataInfo.ABSOLUTE_LOAD}
                    /> */}
                </div>
            }
        />
    );
}

export default PedalsSection;