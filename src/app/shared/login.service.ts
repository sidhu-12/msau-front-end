import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseObject } from "./models/response"
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { 
  
  }
   httpOptions = {
    headers: new HttpHeaders({
      "Content-type":"application/json"
          })
        }
   authenticate(authenticateData: User): Observable<ResponseObject> {

    return this.http.get<ResponseObject>(environment.apiUrl+"/login?username="+authenticateData.email+"&password="+authenticateData.password,this.httpOptions);

    
    };
   isLoggedIn():boolean{
    return localStorage.getItem('name') == null ? false : true;
   }
   logout(){
    localStorage.clear();
}
}



