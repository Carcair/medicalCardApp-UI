import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(private http: HttpClient) { }

  // Get all diagnosis
  getDiagnosis(patientId) {
    let token = localStorage.getItem("bearer_token");
    return this.http.get(
      '/server/api/v1/diagnosis/' + patientId,
      {
        headers: new HttpHeaders().set('Authorization', token)
      }
    )
  }
}
