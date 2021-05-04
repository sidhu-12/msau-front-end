import { DatePipe ,Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Onboardee } from '../shared/onboard';
import { OnboardService } from '../shared/onboard.service';

@Component({
  selector: 'app-update-onboardee',
  templateUrl: './update-onboardee.component.html',
  styleUrls: ['./update-onboardee.component.css'],
  providers: [ DatePipe ]  
})
export class UpdateOnboardeeComponent implements OnInit {

  result :Onboardee;
  updateForm : FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private service : OnboardService,
    private datePipe : DatePipe,
    private location : Location
  ) { 
    if(history.state != null)
    {
        this.result = history.state.updateData;
    }
    else{
      this.result ={
        name :" ",
        email: " ",
        phoneNo : 0 ,
        demandId : 0,
        startDate : new Date(),
        skills : '',
        location : '',
        onBoardStatus : '',
        backgroundCheckStatus : ''
          
      }
    }
      // Changing the date format for viewing purpose.
        let startDate = this.datePipe.transform(this.result.startDate, 'yyyy-MM-dd');
        this.updateForm = this.formBuilder.group({
          name: [this.result.name, Validators.compose([Validators.required,Validators.pattern("[aA-zZ \]+"),Validators.maxLength(30)])],
          email: [this.result.email, Validators.compose([Validators.required,Validators.email,Validators.maxLength(30)])],
          phoneNo: [this.result.phoneNo,Validators.compose([Validators.required,Validators.pattern("^[6-9][0-9]{9}$")])],
          demandId: [this.result.demandId,Validators.compose([Validators.required,Validators.pattern("[0-9]+"),Validators.maxLength(6)])],
          location: [this.result.location,Validators.compose([Validators.required])],
          skills: [this.result.skills,Validators.compose([Validators.required,Validators.maxLength(100)])],
          startDate :[startDate,Validators.required],
          backgroundCheckStatus : [this.result.backgroundCheckStatus ,Validators.required],
          onBoardStatus : [this.result.onBoardStatus ,Validators.required]
    });
  
}

  ngOnInit(): void {
  }
  updateOnboardee():void{
    
    let updateList = this.service.checkFormUpdate(this.updateForm.value ,this.result);
    console.log(updateList);
    this.service.updateOnboardee(updateList).pipe().subscribe(
        data=>{
          // console.log(data);
          // if(data.responseMessage =="Creation Done Successfully")
          
           this.snackBar.open(data.responseMessage,"Done",{
              duration:5000,
           });
        //  this.router.navigate(['dashboard'])
        this.location.back();
          
        },err=>{
          this.snackBar.open(err.message.responseMessage,"Done",{
            duration:5000,
         });
        }
    );
      }
    }
