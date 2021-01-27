import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { HomeComponent } from './components/home/home.component';
import { PatientComponent } from './components/patient/patient.component';
import { MaterialModule } from './core/material.module';

// Possible routes
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'diagnosis',
    component: DiagnosisComponent
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
