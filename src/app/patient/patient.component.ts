import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {  Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  registerForm: FormGroup;
    errors = null;
    partnerCheck = false;

  constructor(
    public fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
            firstname: ['',Validators.required],
            lastname: ['',Validators.required],
            email: ['',Validators.required],
            date: [''],
            address: ['',Validators.required],
            acceptTerms: ['',Validators.required],
            pname:[''],
            plastname:[''],
            pemail:[''],
            pdate:[''],
            paddress:['']
            
          })
        }
   

  ngOnInit() { }

  onSubmit() {
        console.log(this.registerForm.value);

        if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.registerForm.reset();
}


}
// }






