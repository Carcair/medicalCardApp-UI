import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  firstName: string;
  lastName: string;
  cardNumber: string;
  address: string;
  phoneNumber: string;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  // New Patient
  addNewPatient(): void {
    let tempObj = {
      firstName: this.firstName,
      lastName: this.lastName,
      cardNumber: this.cardNumber,
      address: this.address,
      phoneNumber: this.phoneNumber
    }

    this.patientService.postNewPatient(tempObj)
      .subscribe(
        (data) => {}, // No return data
        (error) => console.log(error)
      )
  }
}
