
import { useSelector, useDispatch } from 'react-redux';

import React from 'react'
import { selectLampsControl } from '../store/lampcontrol/selectors';
import { toggleLamp } from '../store/lampcontrol/slice';

export default function LampFunction() {
  const lamps= useSelector(selectLampsControl);
  const dispatch = useDispatch();

  const handleToggleLamp =(id) =>{
     dispatch(toggleLamp({id}));
  };
  
  
    return (
   
      <div>
      <h1>Smart House Control panel</h1>
      <div>
        {lamps.map((lamp) => (
          <div key={lamp.id}>
            <span>Lamp {lamp.id} - {lamp.power ? 'On' : 'Off'}</span>
          <button onClick={() => handleToggleLamp(lamp.id)}>Turn On</button>
          <button onClick={() => handleToggleLamp(lamp.id)}>Turn Off</button> 
            
              
          </div>
        ))}
      </div>
      {/* Other controls for radio, thermostat, etc. */}
    </div>
);
};
