import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Family Budget';

  constructor(private fbService: FirebaseService, private router: Router){
    if(!this.fbService.isLoggedIn){
      this.router.navigate(['login']);
    }
  }
}
