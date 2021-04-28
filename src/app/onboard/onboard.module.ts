import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardRoutingModule } from './onboard-routing.module';
import { SearchComponent } from './search/search.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateonboardeeComponent } from './createonboardee/createonboardee.component';
import { ShowOnboardeeComponent } from './show-onboardee/show-onboardee.component';
import { DeleteonboardeedialogComponent } from './deleteonboardeedialog/deleteonboardeedialog.component';
import { UpdateOnboardeeComponent } from './update-onboardee/update-onboardee.component';


@NgModule({
  declarations: [
    SearchComponent,
    CreateonboardeeComponent,
    ShowOnboardeeComponent,
    DeleteonboardeedialogComponent,
    UpdateOnboardeeComponent
  ],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
    
  ]
})
export class OnboardModule { }
