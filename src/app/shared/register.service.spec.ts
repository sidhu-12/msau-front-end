import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { ResponseObject } from './models/response';
import { User } from './models/user';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpMock : HttpTestingController;
  let injector : TestBed;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService]
      
    });
    injector = getTestBed();
    service = injector.inject(RegisterService);
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('#register should register the user',()=>{
    const userRegister : User = {
      email :"sid1234@abc.com",
      password :"abcdef_1234",
      name :"Sid",
      oAuth : false,

    }
    const expectedResponseMessage : ResponseObject ={
      responseMessage : "Registered Successfully",
      name :""
    }
    service.register(userRegister).subscribe(
      response =>{
        expect(response).toEqual(expectedResponseMessage);
      },fail
    )
    const req = httpMock.expectOne(environment.apiUrl+"/register");
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(userRegister);
    req.flush(expectedResponseMessage);
    
  })
});
