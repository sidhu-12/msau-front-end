import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginActivateService } from './shared/login-activate.service';
import { WillupdatesoonComponent } from './willupdatesoon/willupdatesoon.component';

const routes: Routes = [
 {
    path:'',
   component:LoginComponent,
 },
 {
    path:'register',
    component:RegisterComponent
 },
 {
  path: 'dashboard',
  loadChildren:()=> import('./onboard/onboard.module').then(m=>m.OnboardModule),
  canActivate :[LoginActivateService]
 },
 {
   path: 'updateSoon',
   component:WillupdatesoonComponent,
   canActivate :[LoginActivateService]
 },
 {
  path: 'trends',
  loadChildren:()=> import('./trends/trends.module').then(m=>m.TrendsModule),
  canActivate :[LoginActivateService]
 },
 {
   path:"**",
   component:PagenotfoundComponent
 },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
