import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from 'angular-routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material.module';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PatientComponent } from './components/review/patient/patient.component';
import { DiagnosisComponent } from './components/review/diagnosis/diagnosis.component';
import { NewComponent } from './components/new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPatientComponent } from './components/new/new-patient/new-patient.component';
import { NewDiagnosisComponent } from './components/new/new-diagnosis/new-diagnosis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DiagnosisComponent,
    PatientComponent,
    NewComponent,
    NewPatientComponent,
    NewDiagnosisComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
