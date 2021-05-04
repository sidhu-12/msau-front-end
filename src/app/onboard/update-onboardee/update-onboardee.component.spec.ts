import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

import { UpdateOnboardeeComponent } from './update-onboardee.component';

describe('UpdateOnboardeeComponent', () => {
  let component: UpdateOnboardeeComponent;
  let fixture: ComponentFixture<UpdateOnboardeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnboardeeComponent ],
      imports :[HttpClientTestingModule,RouterTestingModule,AngularMaterialModule,BrowserAnimationsModule],
      providers :[FormBuilder,DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOnboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
