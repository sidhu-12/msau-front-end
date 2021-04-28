import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DeleteonboardeedialogComponent } from '../deleteonboardeedialog/deleteonboardeedialog.component';
import { Onboardee } from '../shared/onboard';
import { OnboardService } from '../shared/onboard.service';

@Component({
  selector: 'app-show-onboardee',
  templateUrl: './show-onboardee.component.html',
  styleUrls: ['./show-onboardee.component.css']
})
export class ShowOnboardeeComponent implements OnInit {

  showResultData : Onboardee[];
  searchResultQuery : string;
  resultEmpty : boolean;
  constructor(
    private service : OnboardService,
    private dialog : MatDialog,
    private snackbar : MatSnackBar,
    private router : Router
  ) { 
    this.resultEmpty = false;
    this.showResultData=[];
    this.searchResultQuery = "NO SEARCH DONE";
    if(history.state.data !=  null)
    {
      this.searchResultQuery = history.state.data.attribute + " : " + history.state.data.value;
    // this.searchResultQuery = "Background Check Status" + " : " + "Completed";
       this.service.searchResult(history.state.data).pipe()
       .subscribe(
         result=>{
            this.showResultData = result;
            // Converting Date format
            let i = 0;
            this.showResultData.forEach((r)=>{
              r.startDate =  new Date(result[i].startDate);
            })
            console.log(this.showResultData);
            if(this.showResultData.length == 0)
            {
               this.resultEmpty = true;
            }
         },
         err=>{
           console.log(err);
         }
       )
      

    }
   
      //  this.service.searchResult({
      //    attribute : 'backgroundCheckStatus',
      //    value : 'Completed'
      //  }).pipe()
      //  .subscribe(
      //    result=>{
      //       this.showResultData = result;
      //       console.log(this.showResultData);
      //    },
      //    err=>{
      //      console.log(err);
      //    }
      //  )
  }

  ngOnInit(): void {
  }
  updateOnboardee(i:number):void{
    console.log(this.showResultData[i]);
    this.router.navigate(["./dashboard/update-onboardee"],{
      state:
      {
        updateData:this.showResultData[i],
      }
    })
  }
  openOnboardeeDialog(i:number):void{
    console.log(this.showResultData[i]);
    const dialogRef = this.dialog.open(
      DeleteonboardeedialogComponent,{
        width:"300 px",
        data:{
          deleteDetails : this.showResultData[i]
        }
      }
    )
    dialogRef.afterClosed().subscribe(
      result =>{
        this.snackbar.open(result.responseMessage ,"Done",{
          duration:3000
        })

        // reloading the component by redirecting to dummy url first and routing to our current url...
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl],{
            state:{
              data: history.state.data
              
            }
            });
        });
      }
      ,err=>{
        throw err;
      }
    );
    

  }

}
