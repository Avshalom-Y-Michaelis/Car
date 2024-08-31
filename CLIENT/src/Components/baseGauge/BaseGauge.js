import GaugeComponent from 'react-gauge-component';
import './BaseGauge.css';

const getArc = (stages) => {
    let subArc = [];
    if (stages) {
        subArc = stages.map((stage) => {
            return { limit: stage };
        });
    }

    return subArc;
};

function BaseGauge({
    sectionData,
    minValue,
    maxValue,
    colorArry,
    units,
    stages,
    layoutPart,
    titel,
}) {
    const gauge = (
        <div>
            <div className="gauge-titel gauge-text">{titel}</div>
            <GaugeComponent
                className="gauge"
                value={sectionData}
                type="radial"
                labels={{
                    valueLabel: {
                        formatTextValue: (value) => `${value} ${units}`,
                        maxDecimalDigits: 0,
                        matchColorWithArc: true,
                    },
                    tickLabels: {
                        type: 'outer',
                        hideMinMax: true,
                    },
                }}
                arc={{
                    colorArray: colorArry,
                    subArcs: getArc(stages),
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
        <div className="gauge-text  gauge-parent" style={{ gridArea: layoutPart }}>
            {sectionData ? gauge : 'NO DATA'}
        </div>
    );
}

export default BaseGauge;
