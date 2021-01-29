import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.patientId;

    this.patientService.getPatient(id)
      .subscribe(
        (data) => this.patient = data,
        (error) => console.log(error)
      )
  }

  // Edit patient info
  editPatient(): void {
    let tempObj = {
      patientId: this.patient.patientId,
      firstName: this.patient.firstName,
      lastName: this.patient.lastName,
      cardNumber: this.patient.cardNumber,
      address: this.patient.address,
      phoneNumber: this.patient.phoneNumber
    }
    this.patientService.putPatient(tempObj)
      .subscribe(
        (data) => {}, // no return data
        (error) => console.log(error)
      )
  }

}