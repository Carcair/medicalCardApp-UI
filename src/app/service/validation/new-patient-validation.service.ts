import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewPatientValidationService {

  constructor() { }

  // Also used by login input and new diagnosis input
  // Initally planned to seperate validation services
  // FIXME: Refactor component name

  // Check input
  // Block empty fields
  checkNewInput(obj): boolean {
    let status: boolean = true;
    Object.values(obj).forEach(val => {
      if(val == undefined || val == "") status = false;
    });

    return status;
  }
}
