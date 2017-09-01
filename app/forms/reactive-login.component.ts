import { Component } from '@angular/core';
import { PasswordValidator } from './PasswordValidator';
import { FormControl, FormGroup, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'st-login',
  templateUrl: './reactive-login.component.html'
})
export class ReactiveLoginComponent {

  loginForm: FormGroup;
  otp : FormControl;  // indepdendent form control 
  isSubmitted: boolean = false;

  validatePassword(control : FormControl) {
      if (control.value.indexOf("*") >= 0)
        return null;  // valid 
      else
        return { mustHaveStar : true , value : control.value }; // invalid 
  }

  constructor(private fb: FormBuilder) {

    this.otp = new FormControl("", Validators.required);

    this.loginForm = this.fb.group(
      {
        username: ["", [Validators.required, Validators.minLength(4)]],  // FormControl 
        password: ["", [Validators.required, this.validatePassword]]
      },
      { validator : PasswordValidator.checkMismatch}  // validators for FormGroup
    );

    this.loginForm.addControl("otp", this.otp);


 }

  login() {
    this.isSubmitted = true;
    console.log(this.loginForm.get("username").value);
    console.log(this.loginForm.get("password").value);
    console.log(this.loginForm.controls);
  }
}

