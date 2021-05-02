import { HttpClientModule } from '@angular/common/http';
import { getTestBed, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { LoginService } from './login.service';
import { ResponseObject } from './models/response';
import { User } from './models/user';
import  { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { environment } from 'src/environments/environment';
import { numberFormat } from 'highcharts';

describe('LoginService', async() => {
   var service: LoginService;
  var httpMock : HttpTestingController;
  var injector : TestBed

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
      
    });
    injector = getTestBed();
    service = injector.inject(LoginService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('#authenticate should return expected response message', async()=>{
    const expectedResponseMessage : ResponseObject ={
      responseMessage : "Login Successfully",
      name : "Sid"
    }
    const userLogin : User = {
      email :"sid123@abc.com",
      password :"abcdef_1234",
      name :"",
      oAuth : false,

    }
    service.authenticate(userLogin).subscribe(
      response => expect(response).toEqual(expectedResponseMessage,"expected Response"),
      fail
    );
   const req = httpMock.expectOne(environment.apiUrl+"/login?username="+userLogin.email+"&password="+userLogin.password);
   expect(req.request.method).toBe('GET');
   req.flush(expectedResponseMessage);
  })
  it('#isLoggedIn should return true if the user is logged in',async()=>{
    localStorage.setItem("name","Sid");
    expect(service.isLoggedIn()).toEqual(true);
  })
  it('#logout should  log out all the users',async()=>{
    localStorage.setItem("name","Sid");
    expect(service.logout()).toBeUndefined(localStorage.getItem("name"));
  })
});


