import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

import { ShowOnboardeeComponent } from './show-onboardee.component';

describe('ShowOnboardeeComponent', () => {
  let component: ShowOnboardeeComponent;
  let fixture: ComponentFixture<ShowOnboardeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOnboardeeComponent ] ,
      imports :[HttpClientTestingModule,RouterTestingModule,AngularMaterialModule,BrowserDynamicTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOnboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
