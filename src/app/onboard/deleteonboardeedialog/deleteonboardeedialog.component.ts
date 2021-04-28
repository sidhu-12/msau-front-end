import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Onboardee } from '../shared/onboard';
import { OnboardService } from '../shared/onboard.service';

@Component({
  selector: 'app-deleteonboardeedialog',
  templateUrl: './deleteonboardeedialog.component.html',
  styleUrls: ['./deleteonboardeedialog.component.css']
})
export class DeleteonboardeedialogComponent implements OnInit {

  deleteOnboardeeName :string;
  constructor(
    private service : OnboardService,
    private dialogRef : MatDialogRef<DeleteonboardeedialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    private deleteData : {
      deleteDetails : Onboardee,
    }
  ) { 
    this.deleteOnboardeeName = this.deleteData.deleteDetails.name;
  }

  ngOnInit(): void {
  }
  confirmDeleteOnboardee():void{
    console.log(this.deleteData.deleteDetails.email);
    this.service.deleteOnboardee(this.deleteData.deleteDetails.email).pipe().subscribe(
      (response)=>{
        this.dialogRef.close(response);
      },
      (err)=>{
        throw err;
      }
    )
  }
  onCancel():void{
    this.dialogRef.close({
      responseMessage : "Cancelled successfully",
    }
    )
  }

}
