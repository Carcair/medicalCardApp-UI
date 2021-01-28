import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  loginForm: FormGroup;

  constructor(private loginService: LoginService) { }

  // Methods
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    let tempObj = {
      username: this.username,
      password: this.password
    }

    this.loginService.getToken(tempObj)
      .subscribe(
        data => {
          let token = this.loginService.extractToken(data);
          this.loginService.startSession(token);
        },
        error => {
          // Fail
          console.log("Login error " + error);
        }
      )
  }
}
