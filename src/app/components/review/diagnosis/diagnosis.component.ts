import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiagnosisService } from 'src/app/service/diagnosis/diagnosis.service';
import { PatientService } from 'src/app/service/patient/patient.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  patient;
  patientId: any;
  diagnosisArr;
  selectedDiagnoseId = 0;
  selectedDiagnose;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private diagnosisService: DiagnosisService
  ) { }

  // Methods
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.patientId = params.patientId

      this.patientService.getPatient(this.patientId)
        .subscribe(
          data => this.patient = data,
          error => console.log(error)
        );

      this.diagnosisService.getDiagnosis(this.patientId)
          .subscribe(
            data => {
              this.diagnosisArr = data;
              this.selectedDiagnose = data[0];
            },
            error => console.log(error)
          );
    })
  }

  onChange() {
    this.selectedDiagnose = this.diagnosisArr[this.selectedDiagnoseId];
  }

}
