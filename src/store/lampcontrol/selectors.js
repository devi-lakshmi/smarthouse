 export const selectLampsControl = (reduxState) => {
    return reduxState.house.lamps;
};



export const selectRadioControl = (reduxState) => {
    return reduxState.house.radio;
};

export const selectThermostatControl = (reduxState) => {
    return reduxState.house.thermostat;
};

