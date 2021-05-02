import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

import { LoginActivateService } from './login-activate.service';
import { LoginService } from './login.service';

describe('LoginActivateService', () => {
  let service: LoginActivateService;
  let loginService : LoginService;
  let route :ActivatedRouteSnapshot;
  let state : RouterStateSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,AppRoutingModule],
      providers : [LoginActivateService,LoginService]
    });
    service = TestBed.inject(LoginActivateService);
    loginService = TestBed.inject(LoginService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#canActivate should redirect to login if not logged in',()=>{
    loginService.logout();
    // expect(loginService.isLoggedIn()).toBe(false);
    expect(service.canActivate(route,state)).toBeFalsy();
  })
  it('#canActivate should not redirect to login if  logged in',()=>{
    localStorage.setItem("name" ,"abc");
    // expect(loginService.isLoggedIn()).toBe(false);
    expect(service.canActivate(route,state)).toBeTruthy();
  })
});
