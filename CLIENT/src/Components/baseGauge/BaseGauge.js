import GaugeComponent from 'react-gauge-component';
import './BaseGauge.css';
function BaseGauge({
    sectionData,
    minValue,
    maxValue,
    colorArry = ['#5BE12C', '#EA4228'],
    units,
    stages,
    layoutPart,
    titel
}) {
    const getArc = () => {
        let subArc = [];
        if (stages) {
            subArc = stages.map((stage) => {
                return { limit: stage };
            });
        }

        return subArc;
    };

    const gauge = (
        <div>
            {titel}
            <GaugeComponent
                className="gauge"
                style={{ margin: 'auto' }}
                value={sectionData}
                type="radial"
                labels={{
                    valueLabel: {
                        formatTextValue: (value) => `${value} ${units}`,
                        style: {
                            // fontSize: '20%',
                            paddingTop: '-100px',
                        },
                        maxDecimalDigits: 0,
                        matchColorWithArc: true,
                    },
                    tickLabels: {
                        type: 'outer',
                        hideMinMax: true,
                        // valueConfig: {
                        //     formatTextValue: (value) => value + 'ºC-------',
                        //     fontSize: 50,
                        // },
                        //type: 'inner',
                        // ticks: [{ value: 20 }],
                    },
                }}
                arc={{
                    colorArray: colorArry,
                    //gradient: true,
                    subArcs: getArc(),
                    padding: 0.02,
                    width: 0.3,
                }}
                pointer={{
                    animationDelay: 10,
                }}
                minValue={minValue}
                maxValue={maxValue}
            />
        </div>
    );

    return (
        <div className="no-data gauge-parent" style={{ gridArea: layoutPart }}>
            {sectionData ? gauge : 'NO DATA'}
        </div>
    );
}

export default BaseGauge;
