import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import { PatientService } from 'src/app/service/patient/patient.service';
import { NewPatientValidationService } from 'src/app/service/validation/new-patient-validation.service';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';

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
  errors: boolean;

  constructor(
    private patientService: PatientService,
    private loginService: LoginService,
    private router: Router,
    private newPatientValidationService: NewPatientValidationService,
    private dialog: MatDialog,
  ) { }

  // Methods

  ngOnInit(): void {
    // Check session validity
    if (!this.loginService.check()) {
      this.router.navigate(["/"]);
    }
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

    // Check for empty fields
    if (!this.newPatientValidationService.checkNewInput(tempObj)) {
      this.dialog.open(ErrorDialogComponent);
      return;
    };

    this.patientService.postNewPatient(tempObj)
      .subscribe(
        // Redirect on successful input
        (data) => this.router.navigate(["/patient"]), // No return data
        (error) => console.log(error)
      )
  }
}