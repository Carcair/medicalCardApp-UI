import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisComponent } from './components/review/diagnosis/diagnosis.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { PatientComponent } from './components/review/patient/patient.component';
import { MaterialModule } from './core/material.module';
import { NewPatientComponent } from './components/new/new-patient/new-patient.component';
import { NewDiagnosisComponent } from './components/new/new-diagnosis/new-diagnosis.component';

// Possible routes
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'patient',
    component: PatientComponent,
    children: [
      {
        path: 'diagnosis/:patientId',
        component: DiagnosisComponent,
        outlet: 'diagnosis'
      }
    ]
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'new_patient',
    component: NewPatientComponent
  },
  {
    path: 'new_diagnosis',
    component: NewDiagnosisComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule, MaterialModule]
})
export class AppRoutingModule { }
