import { SignupForm } from './../core/common/signup';
import { AuthService } from './../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'em-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    firstName: new FormControl("",{
      validators:[ Validators.required]
    }),
    lastName: new FormControl("",{
      validators:[ Validators.required]
    }),
    userName: new FormControl("",{
      validators:[ Validators.required]
    }),
    email: new FormControl("",{
      validators:[ Validators.required]
    }),
    password: new FormControl("",{
      validators:[ Validators.required]
    })
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    const formData = this.signupForm.value; 
    console.log(formData);
    this.authService
    .signup(formData)
    .subscribe((data: SignupForm) => {
      console.log(data);
    })
  }

}