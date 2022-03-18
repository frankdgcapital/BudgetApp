import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public fbService: FirebaseService, private router: Router) { }

  ngOnInit() {
    if (this.fbService.isLoggedIn) {
      this.router.navigate(['dashboard']);
    }
  }
}
