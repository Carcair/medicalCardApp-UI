import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diagnosis } from 'src/app/models/Diagnosis';
import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  patient: Patient;
  patientId: any;
  diagnosis: Diagnosis[];
  selectedDiagnose: any = 0;

  constructor(private route: ActivatedRoute) { }

  // Methods
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.patientId = params.patientId

      this.patient = {
        patientId: 1,
        firstName: "Emir",
        lastName: "Delić",
        cardNumber: "0123456790ssssssssssssssssssss",
        address: "Zenička M-2/18",
        phoneNumber: "061533422",
        date: "27-01-2021"
      }

      this.diagnosis = [
        {
          diagnosisId: 1,
          patientId: 1,
          diagnosis: "Stomak blah blah blah blah blah",
          medicine: "Čaj",
          date: "27-01-2021"
        },
        {
          diagnosisId: 2,
          patientId: 1,
          diagnosis: "Glavobolja blah blah blah blah blah",
          medicine: "Aspirin, Neofen",
          date: "30-01-2021"
        },
        {
          diagnosisId: 3,
          patientId: 1,
          diagnosis: "Nesanica blah blah blah blah blah",
          medicine: "Vježba",
          date: "27-02-2021"
        },
      ];
    })
  }

}
