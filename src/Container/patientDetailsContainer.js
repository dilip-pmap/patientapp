import React from 'react';

function PatientDetailsContainer({ patientDetails }) {

    const renderData = () => {
        const ObjectKeys = Object.keys(patientDetails);
        let result = [];
        ObjectKeys.forEach((item) => {
            result.push(<div className="App-table-row">
                <div className="App-table-label">{item.replace("_", " ")}</div>
                <div className="App-table-text">{patientDetails[item]}</div>
            </div>);
        })
        return result;
    }
    return (
        <div className="App-body App-center">
            {renderData()}
            <br />
            <br />
            <button className="App-button">Make Payment</button>
        </div>
    );
}

export default PatientDetailsContainer;
