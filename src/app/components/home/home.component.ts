import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';
import { NewPatientValidationService } from 'src/app/service/validation/new-patient-validation.service';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  display = "large";

  constructor(
    private loginService: LoginService,
    private router: Router,
    private newPatientValidationService: NewPatientValidationService,
    private dialog: MatDialog
  ) { }

  // Methods
  ngOnInit(): void {
    if (this.loginService.check()) {
      this.router.navigate(["/patient"]);
    }

    
  }

  login() {
    let tempObj = {
      username: this.username,
      password: this.password
    }

    // Check for empty fields
    if(!this.newPatientValidationService.checkNewInput(tempObj)) {
      this.dialog.open(ErrorDialogComponent);
      return;
    }


    this.loginService.getToken(tempObj)
      .subscribe(
        data => {
          let token = this.loginService.extractToken(data);
          this.router.navigate(["/patient"]);
          this.loginService.startSession(token);
        },
        error => {
          // Fail
          console.log("Login error " + error);
        }
      )
  }
}
