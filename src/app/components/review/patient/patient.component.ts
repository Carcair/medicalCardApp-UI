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

  // Methods

  ngOnInit(): void {
    // Check session validity
    if (!this.loginService.check()) {
      this.router.navigate(["/"]);
    }

    this.patientService.getPatients()
      .subscribe(
        data => this.patients = data,
        error => console.log(error)
      )
  }

  // Delete patient by id, backend service also deletes all his diagnosis
  deletePatient(patientId, event) {
    // Parent element has its own event
    // We are blocking that event here
    event.stopPropagation();

    this.patientService.deletePatient(patientId)
      .subscribe(
        (data) => this.router.navigate(["/"]), // No return value
        (error) => console.log(error)
      )
  }
}
