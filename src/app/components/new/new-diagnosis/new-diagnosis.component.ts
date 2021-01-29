import { Component, OnInit } from '@angular/core';
import { DiagnosisService } from 'src/app/service/diagnosis/diagnosis.service';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-new-diagnosis',
  templateUrl: './new-diagnosis.component.html',
  styleUrls: ['./new-diagnosis.component.css']
})
export class NewDiagnosisComponent implements OnInit {
  patients;
  selectedPatientId;
  diagnosis;
  prescription;

  constructor(
    private patientService: PatientService,
    private diagnosisService: DiagnosisService
  ) { }

  ngOnInit(): void {
    this.patientService.getPatients()
      .subscribe(
        (data) => this.patients = data,
        (error) => console.log(error)
      )
  }

  onChange() {
    // console.log(this.selectedPatientId)
  }

  // Add new diagnosis
  addNewDiagnosis() {
    let tempObj = {
      patientId: this.selectedPatientId,
      diagnosis: this.diagnosis,
      medicine: this.prescription
    }

    this.diagnosisService.postNewDiagnosis(tempObj)
      .subscribe(
        (data) => { console.log(data) }, // No return value
        (error) => console.log(error)
      )
  }

}
