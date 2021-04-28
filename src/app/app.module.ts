import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './register/register.component';
import { GoogleLoginProvider, SocialLoginModule,SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OnboardModule } from './onboard/onboard.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { WillupdatesoonComponent } from './willupdatesoon/willupdatesoon.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    NavbarComponent,
    WillupdatesoonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    SocialLoginModule,
    HttpClientModule
  ],
  providers: [
  {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin:false,
      providers:[ 
        { 
          id : GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
        '505194640466-jm6tpjpsu2cm30qlgf5m1q53pi2onbpp.apps.googleusercontent.com')
        }
      ]
    } as SocialAuthServiceConfig,
  },
  
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
