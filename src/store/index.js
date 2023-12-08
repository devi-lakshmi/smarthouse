import {configureStore} from "@reduxjs/toolkit";
import houseReducer from  "./lampcontrol/slice";

const store =configureStore({
    reducer:{
      house:houseReducer 
    },
});

 export default store;