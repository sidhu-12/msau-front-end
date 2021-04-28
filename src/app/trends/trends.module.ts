import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendsRoutingModule } from './trends-routing.module';
import { ChartExampleComponent } from './chart-example/chart-example.component';
import { ChartModule } from 'angular-highcharts';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ChartExampleComponent
  ],
  imports: [
    CommonModule,
    TrendsRoutingModule,
    ChartModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class TrendsModule { }
