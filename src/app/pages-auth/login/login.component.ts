import { Component, OnInit, OnDestroy } from '@angular/core';
import { parseMessage } from '@angular/localize/src/utils';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public fbService: FirebaseService, private router: Router) { }

  ngOnInit() {
    if (this.fbService.isLoggedIn) {
      this.router.navigate(['dashboard']);
    }
  }

  ngOnDestroy() {
  }

  onLoginEmailPassword(email: string, password: string) {
    this.fbService.signIn(email, password);
  }

  onLoginGoogle() {
    this.fbService.googleAuth();
  }
}
