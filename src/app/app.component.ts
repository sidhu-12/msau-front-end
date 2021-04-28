import { Component } from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'msaumanagement-frontend';
  constructor(
    private service :LoginService
  )
  {

  }
  isLoggedIn(){
    return this.service.isLoggedIn();
  }
}
