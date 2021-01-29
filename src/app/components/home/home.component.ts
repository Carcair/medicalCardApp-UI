import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private loginService: LoginService,
    private router: Router
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
