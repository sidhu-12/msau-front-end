import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateonboardeeComponent } from './createonboardee/createonboardee.component';
import { SearchComponent } from './search/search.component';
import { ShowOnboardeeComponent } from './show-onboardee/show-onboardee.component';
import { UpdateOnboardeeComponent } from './update-onboardee/update-onboardee.component';

const routes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path :'createOnboardee',
    component : CreateonboardeeComponent
  },
  {
    path :'show-result',
    component : ShowOnboardeeComponent,
  },
  {
    path : 'update-onboardee',
    component : UpdateOnboardeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardRoutingModule { }
