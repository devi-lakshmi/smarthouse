
import './App.css';
//import DisplayTotalPower from './component/DispalyTotalPower';
//import DisplayTotalPower from './component/DispalyTotalPower';
import LampFunction from './component/LampFunction';
import RadioFunction from './component/RadioFunction';
import ThermostatFunction from './component/ThermostatFunction';

function App() {
  return (
    <div className="App">
      <LampFunction />
     <RadioFunction />
    <ThermostatFunction />
   
    </div>
  );
}

export default App;
