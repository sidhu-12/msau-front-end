import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { first } from 'rxjs/operators';
import { RegisterService } from '../shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private snackBar:MatSnackBar,
      private service : RegisterService
      // private accountService: AccountService,
      // private alertService: AlertService
  ) { 
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,Validators.pattern("[aA-zZ \]+")])],
      email: ['', Validators.compose([Validators.required,Validators.email])],
      password: ['',Validators.compose([Validators.required,Validators.pattern( /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)])],
      reEnterPassword: ['',Validators.compose([Validators.required])],
  });
}
  
    getNameErrorMessage() : string{
      if(this.registerForm.controls.name.hasError("required"))
      {
        return "Please enter the name";
      }
      return "";
    }
    getEmailErrorMessage() :string {
      if (this.registerForm.controls.email.hasError('required')) {
        return 'Please  enter your email-id';
      }
  
      return this.registerForm.controls.email.hasError('email') ? 'Not a valid email' : '';
    }
    getPasswordErrorMessage() :string {
      if (this.registerForm.controls.password.hasError('required')) {
        return 'Please  enter the Password';
      }
  
      return this.registerForm.controls.password.hasError('pattern') ? 
      'Password must contain minimum 8 characters consisting  atleast a capital letter, a small letter and a special character' : '';
    }
    getReEnterPasswordErrorMessage() :string {
      if (this.registerForm.controls.password.hasError('required')) {
        return 'Please  enter the Password';
      }
  
      return this.registerForm.controls.password.value == this.registerForm.controls.reEnterPassword.value ? 
      '' : 'Two Passwords are not same';
    }


  ngOnInit(): void {
  }
  async register(){
   if(this.registerForm.status=="INVALID")
   {
    this.snackBar.open("Registered Unsuccessfully.. Please do fill the form correctly","Done",{
      duration:3000,
    })
   }
   else{
    this.service.register(this.registerForm.value).pipe() // http request with observable object
    .subscribe(
      data=>{
        console.log(data);
        if(data.responseMessage =="Registered Successfully")
        {
         this.snackBar.open(data.responseMessage,"Done",{
            duration:5000,
         });
       this.router.navigate([''])
        }
      },err=>{
        this.snackBar.open(err.message.responseMessage,"Done",{
          duration:5000,
       });
      });
  }
}
}

