import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients;


  constructor(
    private patientService: PatientService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.loginService.check()) {
      this.router.navigate(["/"]);
    }

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
