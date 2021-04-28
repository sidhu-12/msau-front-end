import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnboardeeComponent } from './update-onboardee.component';

describe('UpdateOnboardeeComponent', () => {
  let component: UpdateOnboardeeComponent;
  let fixture: ComponentFixture<UpdateOnboardeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnboardeeComponent ]
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
