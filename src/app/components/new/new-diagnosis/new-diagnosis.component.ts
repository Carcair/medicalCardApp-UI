import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosisService } from 'src/app/service/diagnosis/diagnosis.service';
import { LoginService } from 'src/app/service/login/login.service';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-new-diagnosis',
  templateUrl: './new-diagnosis.component.html',
  styleUrls: ['./new-diagnosis.component.css']
})
export class NewDiagnosisComponent implements OnInit {
  patients;
  selectedPatientId;
  diagnosis;
  prescription;

  constructor(
    private patientService: PatientService,
    private diagnosisService: DiagnosisService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Check validity of session
    if (!this.loginService.check()) {
      this.router.navigate(["/"]);
    }

    // Getting diagnosis data for chosen patient
    this.patientService.getPatients()
      .subscribe(
        (data) => this.patients = data,
        (error) => console.log(error)
      )
  }

  // Observing value change
  onChange() {
    // console.log(this.selectedPatientId)
  }

  // Add new diagnosis
  addNewDiagnosis() {
    let tempObj = {
      patientId: this.selectedPatientId,
      diagnosis: this.diagnosis,
      medicine: this.prescription
    }

    this.diagnosisService.postNewDiagnosis(tempObj)
      .subscribe(
        // Redirection on successful input
        (data) => this.router.navigate(["/patient"]), // No return value
        (error) => console.log(error)
      )
  }

}
