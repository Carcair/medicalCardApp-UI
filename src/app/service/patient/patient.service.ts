import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  // Get All patients
  getPatients() {
    let token = localStorage.getItem("bearer_token");
    return this.http.get(
      '/server/api/v1/patient',
      {
        headers: new HttpHeaders().set('Authorization', token)
      }
    )
  }
  
  // Get One patient
  getPatient(patientId) {
    let token = localStorage.getItem("bearer_token");
    return this.http.get(
      '/server/api/v1/patient/' + patientId,
      {
        headers: new HttpHeaders().set("Authorization", token)
      }
    )
  }

  // Add new Patient

  // Edit patient inf

  // Delete patient
}
