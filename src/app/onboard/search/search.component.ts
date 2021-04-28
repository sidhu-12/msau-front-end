import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { attributeList }  from '../shared/attributeList';
import { OnboardService } from '../shared/onboard.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm :FormGroup;
  autoCompleteValues: string[];
  filteredOptions: Observable<string[]>;
  attributeValue :string;
  attributes :typeof attributeList;
  
  constructor(
    private service :OnboardService,
    private formBuilder : FormBuilder,
    private router  :Router ,
    private snackbar :MatSnackBar
  ){
    this.searchForm = this.formBuilder.group({
      
        attribute : ['',Validators.required],
        value : ['',Validators.required],
    }
    )
    this.filteredOptions = this.searchForm.controls.value.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.autoCompleteValues = [];
      this.attributeValue ="None";
      this.attributes = attributeList;
      this.searchForm.controls.attribute.valueChanges.pipe().subscribe(data=>{
        this.getAttributeValuesForSearch(data);
      })
  }

  ngOnInit():void {
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autoCompleteValues.filter(autoCompleteValues => autoCompleteValues.toLowerCase().includes(filterValue));
  }
  getAttributeValuesForSearch(attributeValue:string):void{
    console.log(this.attributeValue);
    this.service.listByAttribute(attributeValue).pipe().subscribe(
      data=>{
        this.autoCompleteValues = data;
      },
      error=>{
        this.autoCompleteValues.push("ERROR IN SERVER SIDE WILL BE CHECKING SOON");
        throw error;
      }
    )
  }
  createOnboardee() :void{
    this.router.navigate(['./dashboard/createOnboardee'])
  }
  showResult():void{
    console.log(this.searchForm.value);
      if(this.searchForm.valid == false)
      {
          this.snackbar.open("Search bar is empty.." ,"Done",{
            duration:3000,
          })
      }
      else{
        this.router.navigate(['./dashboard/show-result'],{state:{
          data:this.searchForm.value
        }})
      }
  }
}
