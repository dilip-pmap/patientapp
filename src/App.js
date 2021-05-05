import './App.css';
import PatientContainer from "./Container/patientContainer";
import PatientDetailsContainer from "./Container/patientDetailsContainer";
import ReportContainer from "./Container/reportContainer";
import { useState } from 'react';

export const  Constants = {
  PATIENT: 'Patient',
  PATIENT_DETAILS: 'Patient Details',
  PAYMENT: 'Payment',
  REPORT: 'Report'
};
function App() {

  const [ renderComponent, setRenderComponent] = useState(Constants.PATIENT);
  const [ patientDetails, setPatientDetails] = useState({
    patient_id: null,
    patient_name: 'David Caves',
    treatment_details: "eye treatment",
    pay_amount: 3000
  })
  const handleSubmit = (value)=> {
    setPatientDetails({...patientDetails, patient_id: value});
    setRenderComponent(Constants.PATIENT_DETAILS);
  }

  const handleReport = () => {
    setRenderComponent(Constants.REPORT);
  }

  const handleHome = () => {
    setRenderComponent(Constants.PATIENT)
  }
  let renderPage = null;
  switch(renderComponent) {
    case Constants.PATIENT:
      renderPage =  <PatientContainer handleSubmit={handleSubmit}/>;
      break;
    case Constants.PATIENT_DETAILS:
     renderPage = <PatientDetailsContainer patientDetails={patientDetails} />;
     break;
     case Constants.REPORT:
       renderPage = <ReportContainer />;
       break;
    default:
      break;
  }
  return (
    <div>
      <header className="App-header">
        <div>
        <span className="logo-image" />
        {' '}
        <span className="application-name">Patient Payment Application</span>
        {' '}
        <span className="App-nav-bar-menu"onClick={handleReport}>Report</span>
        {' '}
        <span className="App-nav-bar-menu"onClick={handleHome}>Home</span>
        {' '}
        </div>
        
      </header>
      {renderPage}
    </div>
  );
}

export default App;
