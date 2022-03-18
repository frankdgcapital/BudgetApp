import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  isAuthenticated = false;

  constructor(private fbService: FirebaseService,
    private notificationService: NotificationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.fbService.isLoggedIn) {
      console.log('NOT AUTHENTICATED');
      this.notificationService.showWarning('The current user is not authenticated!', 'Unauthenticated User');
      this.router.navigate(['sign-in']);
      return false;
    }
    console.log('AUTHENTICATED');

    return true;
  }
}
