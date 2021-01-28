import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  extractToken(obj): string {
    let token = "Bearer ";
    token += obj.jwt;
    return token;
  }

  startSession(token: string): void {
    localStorage.setItem("bearer_token", token);
  }

  logout(): void {
    localStorage.removeItem("bearer_token");
  }
}
