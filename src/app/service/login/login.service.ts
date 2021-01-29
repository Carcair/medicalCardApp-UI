import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // Get authentication token
  getToken(creds) {
    let body = JSON.stringify(creds);

    return this.http.post(
      '/server/api/v1/authenticate',
      body,
      httpOptions
    );
  }

  // Extract token from response and return "Bearer <token>"
  extractToken(obj): string {
    let token = "Bearer ";
    token += obj.jwt;
    return token;
  }

  // Start session using local storage
  startSession(token: string): void {
    localStorage.setItem("bearer_token", token);
  }

  // Stop session
  logout(): void {
    localStorage.removeItem("bearer_token");
  }

  // Check session
  check(): boolean {
    if(localStorage.getItem("bearer_token")) {
      return true;
    } else {
      return false;
    }
  }
}
