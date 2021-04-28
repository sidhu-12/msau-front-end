import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteonboardeedialogComponent } from './deleteonboardeedialog.component';

describe('DeleteonboardeedialogComponent', () => {
  let component: DeleteonboardeedialogComponent;
  let fixture: ComponentFixture<DeleteonboardeedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteonboardeedialogComponent ]
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
