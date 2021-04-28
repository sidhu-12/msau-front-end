import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateonboardeeComponent } from './createonboardee.component';

describe('CreateonboardeeComponent', () => {
  let component: CreateonboardeeComponent;
  let fixture: ComponentFixture<CreateonboardeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateonboardeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateonboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
