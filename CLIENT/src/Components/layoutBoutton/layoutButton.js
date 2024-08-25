import { useState } from 'react';
import './layoutButton.css';
import colors from '../../Stores/ColorStore.json';

function LayoutButton() {
    const SCALE_FACTOR= 1.5   
    const closeTransofrm = {
        mineBottom: `scale(${SCALE_FACTOR}, ${SCALE_FACTOR})`,
        top: { transform: '', color: colors.lightBlue },
        midel: { transform: '', color: colors.darkBlue },
        buttom: '',
    };

    const openTransform = {
        mineBottom: `rotate(-45deg) scale(${SCALE_FACTOR}, ${SCALE_FACTOR})`,
        top: { transform: 'rotate(-45deg) translate(-2.5px, -4px)', color: colors.lightOreng },
        midel: { transform: 'rotate(-45deg) translate(5px, -3px)', color: colors.darkOreng },
        buttom: 'translate(-8px, 0px)',
    };

    const [currentLayout, setCurrentLayout] = useState(closeTransofrm);

    return (
        <div
            className="button-layout-layout"
            style={{ transform: currentLayout.mineBottom }}
            onMouseEnter={() => setCurrentLayout(openTransform)}
            onMouseLeave={() => setCurrentLayout(closeTransofrm)}
        >
            <div
                className="button-short-line delayed-transittion"
                style={{
                    gridArea: 'top',
                    transform: currentLayout.top.transform,
                    backgroundColor: currentLayout.top.color,
                }}
            ></div>
            <div
                className="button-short-line delayed-transittion"
                style={{
                    gridArea: 'midel',
                    transform: currentLayout.midel.transform,
                    backgroundColor: currentLayout.midel.color,
                }}
            ></div>
            <div
                className="button-short-line delayed-transittion"
                style={{
                    gridArea: 'bottom',
                    transform: currentLayout.buttom,
                    backgroundColor: colors.gray,
                    boxShadow: `0.5px 0.5px ${currentLayout.top.color}`,
                }}
            ></div>
            <div
                className="button-long-line delayed-transittion"
                style={{
                    gridArea: 'right',
                    backgroundColor: colors.gray,
                    boxShadow: `-0.5px 0.5px ${currentLayout.top.color}`,
                }}
            ></div>
        </div>
    );
}

export default LayoutButton;
