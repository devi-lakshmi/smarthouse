
import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit';




const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: { genre: "classic rock", power: false },
  thermostat: 20,

};
export const houseSlice = createSlice({
name : "house",
initialState,
reducers:{

    toggleLamp: (state, action) => {
      console.log(action)
    console.log(current(state));
      const { id } = action.payload;
      const lamp = state.lamps.find((lamp) => lamp.id === id);
      if (lamp) {
        lamp.power = !lamp.power;
      }
    },
  
toggleRadio: (state) => {
      state.radio.power = !state.radio.power;
    },
    changeRadioGenre: (state, action) => {
      state.radio.genre = action.payload;
    },
  channgeThermostat :(state ,action) =>{
    state.thermostat =action.payload;

  },

},

});




export const {toggleLamp, toggleRadio ,changeRadioGenre ,channgeThermostat} = houseSlice.actions;
 
  
export default houseSlice.reducer;