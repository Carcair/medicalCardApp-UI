import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  // Get All patients
  getPatients() {
    let token = localStorage.getItem("bearer_token");

    return this.http.get(
      "/server/api/v1/patient",
      {
        headers: new HttpHeaders().set("Authorization", token)
      }
    )
  }
  
  // Get One patient
  getPatient(patientId) {
    let token = localStorage.getItem("bearer_token");

    return this.http.get(
      "/server/api/v1/patient/" + patientId,
      {
        headers: new HttpHeaders().set("Authorization", token)
      }
    )
  }

  // Add new Patient
  postNewPatient(patientObj) {
    let body = JSON.stringify(patientObj);
    let token = localStorage.getItem("bearer_token");

    return this.http.post(
      "/server/api/v1/patient",
      body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": token
        })
      }
    );
  }

  // Edit patient inf
  putPatient(patientObj) {
    let body = JSON.stringify(patientObj)
    let token = localStorage.getItem("bearer_token");

    return this.http.put(
      "/server/api/v1/patient",
      body,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          "Authorization": token
        })
      }
    );

  }

  // Delete patient
  deletePatient(patientId) {
    let token = localStorage.getItem("bearer_token");

    return this.http.delete(
      "/server/api/v1/patient/" + patientId,
      {
        headers: new HttpHeaders({
          "Authorization": token
        })
      }
    )
  }
}
