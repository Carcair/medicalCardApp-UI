import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  // Methods

  ngOnInit(): void {
    // Check session validity
    if (!this.loginService.check()) {
      this.router.navigate(["/"]);
    }
  }
}
