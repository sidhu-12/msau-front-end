import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { TrendService } from '../trend.service';

import { ChartExampleComponent } from './chart-example.component';

describe('ChartExampleComponent', () => {
  let component: ChartExampleComponent;
  let fixture: ComponentFixture<ChartExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartExampleComponent ],
      imports :[ HttpClientTestingModule,RouterTestingModule,AngularMaterialModule,BrowserAnimationsModule],
      providers : [ TrendService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
