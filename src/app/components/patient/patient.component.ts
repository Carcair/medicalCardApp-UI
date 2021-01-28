import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Patient[] = [
    {
      patientId: 1,
      firstName: "Emir",
      lastName: "Delić",
      cardNumber: "0123456790ssssssssssssssssssss",
      address: "Zenička M-2/18",
      phoneNumber: "061533422",
      date: "27-01-2021"
    },
    {
      patientId: 2,
      firstName: "Emir",
      lastName: "Delić",
      cardNumber: "0123456790",
      address: "Zenička M-2/18",
      phoneNumber: "061533422",
      date: "27-01-2021"
    },
    {
      patientId: 3,
      firstName: "Emir",
      lastName: "Delić",
      cardNumber: "0123456790",
      address: "Zenička M-2/18",
      phoneNumber: "061533422",
      date: "27-01-2021"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
