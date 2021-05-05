import React from 'react';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import {
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
  } from '@material-ui/core';

const ReportContainer = () => {
    const patientDetails = [
        {patient_id: 12345,
        patient_name: 'Dave Jhon',
        treatment_details: 'Eye Operation',
        pay_amount: 3000,
        payment_method: 'credit card',
        payment_date: '21/03/2021'
        }
    ];

    const exportAsPdf = () => {
        var doc = new jsPDF();
        autoTable(doc, { html: '#tableReport' })
        doc.save('visitreport.pdf')
      };
  
      const printTable = () => {
        var content = document.getElementById("table-data-container");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
      };
  return (
    <div className="App-body App-center">
     <h2>Report</h2> 
     <div style={{ height: 40, float: 'right'}}>
          <PrintIcon onClick={printTable}/>
          <PictureAsPdfIcon onClick={exportAsPdf}/>
          </div>
        <iframe id="ifmcontentstoprint" style={{height: '0px', width: '0px', position: 'absolute'}}></iframe>
        <TableContainer component={Paper} id="table-data-container">
        <Table id="tableReport">
        <TableHead color="#61dafb" >
        <TableRow>
            <TableCell align="right">Patient Id</TableCell>
            <TableCell align="right">Patient Name</TableCell>
            <TableCell align="right">Treatment Details</TableCell>
            <TableCell align="right">Pay Amount</TableCell>
            <TableCell align="right">Payment Method</TableCell>
            <TableCell align="right">Payment Date </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientDetails.map((row, index) => 
                (<TableRow key={index}>
                    <TableCell align="right">{row.patient_id}</TableCell>
                    <TableCell align="right">{row.patient_name}</TableCell>
                    <TableCell align="right">{row.treatment_details}</TableCell>
                    <TableCell align="right">{row.pay_amount}</TableCell>
                    <TableCell align="right">{row.payment_method}</TableCell>
                    <TableCell align="right">{row.payment_date}</TableCell>
                  </TableRow>)
            )}
          </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

export default ReportContainer;
