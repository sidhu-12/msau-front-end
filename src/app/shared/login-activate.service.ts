import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginActivateService implements CanActivate {
  // This service is used for guarding the other end points

  constructor(private authService:LoginService , private router :Router) { }
  canActivate(
    route :ActivatedRouteSnapshot,
    state :RouterStateSnapshot
  ):Observable<boolean>|Promise<boolean>|boolean{
    //console.log(history.state.name);
    if(!this.authService.isLoggedIn())
    {
      this.router.navigate(['']);
    }
    return true;
  }
}
