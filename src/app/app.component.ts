import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  opened: boolean = false;
  state: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  // Methods
  ngOnInit() {}

  ngOnDestroy() {}

  // Logout
  logout(): void {
    this.loginService.logout();
    // Reroutin to home/login page
    this.router.navigate(["/"]);
  }
}
