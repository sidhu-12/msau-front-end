import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { ResponseObject } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment';
import { AttributeValueObject } from './attributeValueUpdate';
import { Onboardee } from './onboard';

import { OnboardService } from './onboard.service';

describe('OnboardService', () => {
  let service: OnboardService;
  let httpMock : HttpTestingController;
  let injector : TestBed


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :[HttpClientTestingModule],
      providers :[OnboardService]
    });
    injector = getTestBed();
    service = injector.inject(OnboardService);
    httpMock = injector.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#create should create  the onboardee',()=>{
    const newOnboardee : Onboardee = {
      email :"sid1234@abc.com",
      name :"Sid",
      phoneNo : 9876543210,
      demandId : 11131,
      skills : 'Angular',
      startDate : new Date(),
      onBoardStatus : 'Pending',
      backgroundCheckStatus : 'Completed',
      location : 'Bangalore'


    }
    const expectedResponseMessage : ResponseObject ={
      responseMessage : "Creation done Successfully",
      name :""
    }
    service.createOnboardee(newOnboardee).subscribe(
      response =>{
        expect(response).toEqual(expectedResponseMessage);
      },fail
    )
    const req = httpMock.expectOne(environment.apiUrl+"/create");
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newOnboardee);
    req.flush(expectedResponseMessage);
    
  })
  it('#delete should delete  the onboardee',()=>{
    const emailString = "abc@acc.com"
    const expectedResponseMessage : ResponseObject ={
      responseMessage : "Deletion done Successfully",
      name :""
    }
    service.deleteOnboardee(emailString).subscribe(
      response =>{
        expect(response).toEqual(expectedResponseMessage);
      },fail
    )
    const req = httpMock.expectOne(environment.apiUrl+"/delete?deleteEmail="+emailString);
    expect(req.request.method).toEqual('DELETE');
    req.flush(expectedResponseMessage);
    
  })

it('#listByAtrribute should list the values of  the attribute',()=>{
  const attribute = "location"
  const expectedResponseMessage : string[] =[
    "Chennai",
    "Mumbai"
]
  service.listByAttribute(attribute).subscribe(
    response =>{
      expect(response).toEqual(expectedResponseMessage);
    },fail
  )
  const req = httpMock.expectOne(environment.apiUrl+"/listByAttribute?attribute="+attribute);
  expect(req.request.method).toEqual('GET');
  req.flush(expectedResponseMessage);
  
})
it('#updateOnboardee should update the value of  the attribute',()=>{
  const updateList :Object ={
    attributes : ["location", "onboardStatus"],
    values : ["ABC","DEF"],
    email : ["abcdef@acc.com"]
  }
  const expectedResponseMessage : ResponseObject ={
    responseMessage :"Updation done successfully",
    name :"",
}
  service.updateOnboardee(updateList).subscribe(
    response =>{
      expect(response).toEqual(expectedResponseMessage);
    },fail
  )
  const req = httpMock.expectOne(environment.apiUrl+"/update");
  expect(req.request.method).toEqual('PUT');
  expect(req.request.body).toEqual(updateList);
  req.flush(expectedResponseMessage);
  
})
it('#searchResult should give the values of the search ',()=>{
  const attributeList :Object={
    attribute :"name",
    value : "abc"
  }
  const expectedResponseMessage : Onboardee[] =[];
  service.searchResult(attributeList).subscribe(
    response =>{
      expect(response).toEqual(expectedResponseMessage);
    },fail
  )
  const req = httpMock.expectOne(environment.apiUrl+"/searchResult");
  expect(req.request.method).toEqual('POST');
  expect(req.request.body).toEqual(attributeList);
  req.flush(expectedResponseMessage);
  
})
it('#checkFormUpdate should change the structure of the data in the required format',()=>{

  let formValue ={
    name : "ABC",
    email : "cdf@acc.com",
    location : "Bangalore"
  };
  let oldValue = {
    name : "ABD",
    email : "cdf@acc.com",
    location : "Bangalore"
  }
  let attributeValueObject :AttributeValueObject = {
    attributes : ["name"],
    values : ["ABC"],
    email : ["cdf@acc.com"]
  };
  expect(service.checkFormUpdate(formValue,oldValue)).toEqual(attributeValueObject);
  
})
});
