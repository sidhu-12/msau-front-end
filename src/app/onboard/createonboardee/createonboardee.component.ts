import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OnboardService } from '../shared/onboard.service';
import { Onboardee } from '../shared/onboard';

@Component({
  selector: 'app-createonboardee',
  templateUrl: './createonboardee.component.html',
  styleUrls: ['./createonboardee.component.css']
})
export class CreateonboardeeComponent implements OnInit {

  onboardeeForm: FormGroup;
  loading = false;
  submitted = false;
  // onboardee :Onboardee

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private snackBar:MatSnackBar,
      private service : OnboardService
  ) { 
    this.onboardeeForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required,Validators.pattern("[aA-zZ \]+"),Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required,Validators.email,Validators.maxLength(30)])],
      phoneNo: ['',Validators.compose([Validators.required,Validators.pattern("^[6-9][0-9]{9}$")])],
      demandId: ['',Validators.compose([Validators.required,Validators.pattern("[0-9]+"),Validators.maxLength(6)])],
      location: ['',Validators.compose([Validators.required])],
      skills: ['',Validators.compose([Validators.required,Validators.maxLength(100)])],
      startDate :['',Validators.required],
      backgroundCheckStatus : ['' ,Validators.required],
      onBoardStatus : ['' ,Validators.required]
   });
   ;
  

}
  ngOnInit(): void {
  }
  getNameErrorMessage():string{
    if(this.onboardeeForm.controls.name.hasError("required"))
    {
      return "Please enter a name ";
    }
    if(this.onboardeeForm.controls.name.hasError("pattern"))
    {
      return "Please enter a valid name";
    }
    return this.onboardeeForm.controls.name.hasError("maxLength") ?"Name should be less than 30 characters " : "";
  }
  getEmailErrorMessage():string{
    if(this.onboardeeForm.controls.email.hasError("required"))
    {
      return "Please enter a email ";
    }
    if(this.onboardeeForm.controls.email.hasError("email"))
    {
      return "Please enter a valid email";
    }
    return this.onboardeeForm.controls.name.hasError("maxLength") ?"email should be less than 30 characters " : "";
  }
  getPhoneNoErrorMessage():string{
    if(this.onboardeeForm.controls.phoneNo.hasError("required"))
    {
      return "Please enter a Phone Number ";
    }
    if(this.onboardeeForm.controls.name.hasError("pattern"))
    {
      return "Please enter a valid Phone Number";
    }
    return "";
  }
  geDemandIdErrorMessage():string{
    if(this.onboardeeForm.controls.demandId.hasError("required"))
    {
      return "Please enter a Demand ID ";
    }
    if(this.onboardeeForm.controls.demandId.hasError("pattern"))
    {
      return "Please enter a valid Demand ID";
    }
    return this.onboardeeForm.controls.demandId.hasError("maxLength") ?"Name should be less than 6 characters " : "";
  }
  getLocationErrorMessage():string{
    if(this.onboardeeForm.controls.location.hasError("required"))
    {
      return "Please Select a Location ";
    }
    return "";
  }
  getSkillsErrorMessage():string{
    if(this.onboardeeForm.controls.skills.hasError("required"))
    {
      return "Please enter a name ";
    }
    return this.onboardeeForm.controls.skills.hasError("maxLength") ?"Skills should be less than 100 characters " : "";
  }

  getStartDateErrorMessage():string{
    if(this.onboardeeForm.controls.startDate.hasError("required"))
    {
      return "Please Select a Date ";
    }
    return "";
  }
  getBackgroundCheckErrorMessage():string{
    if(this.onboardeeForm.controls.backgroundCheckStatus.hasError("required"))
    {
      return "Please Select the Background Check Status ";
    }
    return "";
  }
  getOnboardCheckMessage():string{
    if(this.onboardeeForm.controls.onBoardStatus.hasError("required"))
    {
      return "Please Select the  Onboarding Status ";
    }
    return  "";
  }
  async create(){
   if(this.onboardeeForm.status=="INVALID")
   {
    this.snackBar.open("Created Unsuccessfully.. Please do fill the form correctly","Done",{
      duration:3000,
    })
   }
   else{
     console.log(this.onboardeeForm.value);
    this.service.createOnboardee(this.onboardeeForm.value).pipe() // http request with observable object
    .subscribe(
      data=>{
        console.log(data);
        if(data.responseMessage =="Creation Done Successfully")
        {
         this.snackBar.open(data.responseMessage,"Done",{
            duration:5000,
         });
       this.router.navigate(['dashboard'])
        }
      },err=>{
        this.snackBar.open(err.message.responseMessage,"Done",{
          duration:5000,
       });
      });
  }
}




}
