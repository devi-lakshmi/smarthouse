import { useSelector, useDispatch } from 'react-redux';
import { selectThermostatControl } from '../store/lampcontrol/selectors';
import {channgeThermostat} from "../store/lampcontrol/slice";

const ThermostatFunction = () =>{
const thermostat =useSelector(selectThermostatControl);

    const dispatch =useDispatch();

   const handleChanngeThermostat = (e) =>{
     dispatch(channgeThermostat(Number(e.target.value)));
   };
    
   
   
   return (

    <div>
    <h2>Thermostat Control</h2>
    <p>Current Temperature: {thermostat}°C</p>
      <label>
        Set Temperature:
        <input
          type="number"
          value={thermostat}
          onChange={handleChanngeThermostat}
        />
      </label>
    
    </div>
)





}
 export default ThermostatFunction;


