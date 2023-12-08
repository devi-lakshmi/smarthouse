import { useSelector, useDispatch } from 'react-redux';

import { selectRadioControl } from '../store/lampcontrol/selectors';
 import {toggleRadio , changeRadioGenre}  from "../store/lampcontrol/slice";

  
  const RadioFunction = () => {
  
  const radio = useSelector(selectRadioControl);
  const dispatch = useDispatch();
  

const handleToggleRadio = () => {
    dispatch(toggleRadio());
  };

  const handleGenreChange = (e) => {
    dispatch(changeRadioGenre(e.target.value));
  };
  
    return (
    <div>
     <h2>Radio Control </h2>
     <p>Radio -{radio.power ? "on": "off"}</p>
     <p>Genre : {radio.genere} </p>
     <button onClick={ handleToggleRadio}>
     {radio.power ? "Turn Off Radio" : "Turn on Radio"}
     </button>
     <input
        type="text"
        value={radio.genre}
        onChange={handleGenreChange}
        placeholder="Enter genre"
      />
    
    </div>
    );
    };
export default RadioFunction;