import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients;


  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(
        data => this.patients = data,
        error => console.log(error)
      )
  }

  deletePatient(patientId) {
    this.patientService.deletePatient(patientId)
      .subscribe(
        (data) => {}, // No return value
        (error) => console.log(error)
      )
  }
}
