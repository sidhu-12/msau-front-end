import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar'
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { LoginService } from '../shared/login.service';
//import { AccountService, AlertService } from '@app/_services';
@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar:MatSnackBar,
        private oAuthService: SocialAuthService,
        private service : LoginService,
  
        // private accountService: AccountService,
        // private alertService: AlertService
    ) { 
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    }
    
    ngOnInit() {
       if(this.service.isLoggedIn())
       {
         this.router.navigate(["dashboard"]);
       }
    }

   
    signInWithGoogle(): void { //OAuth function
      console.log("Google signin called")
      this.oAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialusers => {  
        console.log(socialusers);
        this.snackBar.open('Login Successful',"Done",{
          duration:5000,
        });
        localStorage.setItem("name" ,socialusers.firstName);
        this.router.navigate(['/dashboard'],{
          relativeTo:this.route,
        });
  
      }).catch(err=>{
        this.snackBar.open('Login Unsuccessful',"Done",{
          duration:5000,
        });
        console.log(err);
      }
        );
        
    }
    async onSubmit() {
      if(this.submitted == true)
      {
        return ;
      }
        if(this.form.status=="INVALID")
        {
          this.submitted = false;
        }
        else 
        {       
         this.service.authenticate(this.form.value).pipe(first()) // http request with observable object
         .subscribe(
           data=>{
             console.log(data);
             if(data.responseMessage =="Login Successfully")
             {
              this.snackBar.open(data.responseMessage,"Done",{
                 duration:5000,
              });
              localStorage.setItem("name" ,data.name);
            this.router.navigate(['dashboard'],{
              relativeTo:this.route,
              state:{
                name:data.name
              }
            })
          }
          else{
            this.snackBar.open(data.responseMessage,"Done",{
              duration:5000,
           });
           this.submitted = false;          
          }
        },
        error=>{
          this.snackBar.open(error.message.responseMessage,"Done",{
            duration:5000,
          });
        }
         )
          
      }
      
      }
    }