import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { OnboardService } from '../shared/onboard.service';
import  { Onboardee } from '../shared/onboard'

import { DeleteonboardeedialogComponent } from './deleteonboardeedialog.component';

describe('DeleteonboardeedialogComponent', () => {
  let component: DeleteonboardeedialogComponent;
  let fixture: ComponentFixture<DeleteonboardeedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteonboardeedialogComponent ],
      imports :[HttpClientTestingModule,RouterTestingModule,AngularMaterialModule,BrowserDynamicTestingModule],
      providers :[FormBuilder,OnboardService,
        { provide: MatDialogRef, useValue: {} } ,{ provide: MAT_DIALOG_DATA, useValue: {
          name: "",
          phoneNo: "",
          email: "",
          skills: '',
          location : '',
          onboardStatus : '',
          backgroundCheckStatus : '',
          demandId : '',
          
        } }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteonboardeedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
