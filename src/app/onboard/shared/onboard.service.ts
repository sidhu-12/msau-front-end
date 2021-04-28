import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseObject } from 'src/app/shared/models/response';
import { environment } from 'src/environments/environment';
import { OnboardModule } from '../onboard.module';
import { Onboardee } from './onboard';
import { AttributeValueObject } from './attributeValueUpdate';
import { attributeNames } from './attributeNames';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {

  constructor(
    private http :HttpClient
  ) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      "Content-type":"application/json"
          })
        }
  listByAttribute(attribute :string):Observable<string[]>{
    return this.http.get<string[]>(environment.apiUrl+"/listByAttribute?attribute="+attribute,this.httpOptions);
  }
  createOnboardee( newOnboardee : Onboardee) :Observable<ResponseObject>{
    return this.http.post<ResponseObject>(environment.apiUrl+"/create",newOnboardee,this.httpOptions);
  }
  searchResult(attributeList : Object):Observable<Onboardee[]>{
    return this.http.post<Onboardee[]>(environment.apiUrl+"/searchResult",attributeList,this.httpOptions);
  }
  deleteOnboardee (emailDelete : string ) : Observable<ResponseObject>{
    return this.http.delete<ResponseObject>(environment.apiUrl+"/delete?deleteEmail="+emailDelete,this.httpOptions);
  }
  updateOnboardee (updateList : Object):Observable<ResponseObject>{
    return this.http.put<ResponseObject>(environment.apiUrl+"/update",updateList,this.httpOptions);
  }
  checkFormUpdate (formValue : any , oldValue : any) : AttributeValueObject{
    let updateList :AttributeValueObject={
      attributes :[],
      values : [],
      email : [oldValue.email]
    }
    attributeNames.forEach(attribute=>{
      if(oldValue[attribute.value] != formValue[attribute.value])
      {
          updateList.attributes.push(attribute.value);
          updateList.values.push(formValue[attribute.value]);
      }
    })
    return updateList;

  }
  
}
