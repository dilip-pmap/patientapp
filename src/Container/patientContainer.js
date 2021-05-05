import React, {useState} from 'react';

function PatientContainer({handleSubmit}) {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        handleSubmit(value);
    }
  return (
    <div className="App-body App-center">
      <input type="text" value={value} placeholder="enter the patient id"onChange={handleChange} className="App-form-control-input"/>
        <br/>
        <br/>
      <button className="App-button" onClick={handleClick}>Submit</button>
    </div>
  );
}

export default PatientContainer;
