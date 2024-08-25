import colors from './ColorStore.json';

export default {
    RPM: {
        minValue: 0,
        maxValue: 7000,
        units: 'RPM',
        titel: 'RPM',
        stages: [1500, 4700, 5500, 7000],
        colorArry: [colors.darkBlue, colors.gray, colors.darkOreng, colors.lightOreng],
    },
    SPEED: {
        minValue: 0,
        maxValue: 150,
        units: 'Km/h',
        titel: 'SPEED',
        stages: [100, 120, 150],
        colorArry: [colors.gray, colors.darkOreng, colors.lightOreng],
    },
    COOLANT_TEMP: {
        minValue: 0,
        maxValue: 180,
        units: '°C',
        titel: 'COOLANT TEMP',
        stages: [40, 75, 120, 145, 170],
        colorArry: [
            colors.lightBlue,
            colors.darkBlue,
            colors.gray,
            colors.darkOreng,
            colors.lightOreng,
        ],
    },
    RELATIVE_ACCEL_POS: {
        minValue: 0,
        maxValue: 180,
        units: '°C',
        titel: 'gasePedal',
        stages: [40, 75, 120, 145, 170],
        colorArry: [
            colors.lightBlue,
            colors.darkBlue,
            colors.gray,
            colors.darkOreng,
            colors.lightOreng,
        ],
    },
     THROTTLE_POS: {
        minValue: 0,
        maxValue: 180,
        units: '°C',
        titel: 'THROTTLE_POS',
        stages: [40, 75, 120, 145, 170],
        colorArry: [
            colors.lightBlue,
            colors.darkBlue,
            colors.gray,
            colors.darkOreng,
            colors.lightOreng,
        ],
    },
      ABSOLUTE_LOAD: {
        minValue: 0,
        maxValue: 180,
        units: '°C',
        titel: 'ABSOLUTE_LOAD',
        stages: [40, 75, 120, 145, 170],
        colorArry: [
            colors.lightBlue,
            colors.darkBlue,
            colors.gray,
            colors.darkOreng,
            colors.lightOreng,
        ],
    },
};
