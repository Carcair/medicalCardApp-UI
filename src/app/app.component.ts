import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './service/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  opened: boolean = false;

  constructor(private loginService: LoginService) {}

  // Methods
  ngOnInit() {}

  ngOnDestroy() {}

  // Logout
  logout(): void {
    this.loginService.logout();
  }
}
