import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOnboardeeComponent } from './show-onboardee.component';

describe('ShowOnboardeeComponent', () => {
  let component: ShowOnboardeeComponent;
  let fixture: ComponentFixture<ShowOnboardeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOnboardeeComponent ]
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
