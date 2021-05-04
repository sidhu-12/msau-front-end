import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { OnboardService } from '../shared/onboard.service';

import { CreateonboardeeComponent } from './createonboardee.component';

describe('CreateonboardeeComponent', () => {
  let component: CreateonboardeeComponent;
  let fixture: ComponentFixture<CreateonboardeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateonboardeeComponent ],
      imports :[HttpClientTestingModule,RouterTestingModule,AngularMaterialModule,BrowserAnimationsModule],
      providers : [FormBuilder,OnboardService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateonboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
