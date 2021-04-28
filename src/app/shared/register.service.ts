import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseObject } from './models/response';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http:HttpClient) { 
  
  }
   httpOptions = {
    headers: new HttpHeaders({
      "Content-type":"application/json"
          })
        }
   register(registerData: User): Observable<ResponseObject> {

    return this.http.post<ResponseObject>(environment.apiUrl+"/register",registerData,this.httpOptions);

    
    };

}
