import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartExampleComponent } from './chart-example/chart-example.component';

const routes: Routes = [
  {
    path:"",
    component:ChartExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendsRoutingModule { }
