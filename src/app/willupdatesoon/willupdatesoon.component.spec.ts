import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WillupdatesoonComponent } from './willupdatesoon.component';

describe('WillupdatesoonComponent', () => {
  let component: WillupdatesoonComponent;
  let fixture: ComponentFixture<WillupdatesoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WillupdatesoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WillupdatesoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
