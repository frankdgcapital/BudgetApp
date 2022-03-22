import { Routes } from '@angular/router';
import { AnonymousGuardService } from 'src/app/guards/anonymous-guard.service';
import { ForgotPasswordComponent } from 'src/app/pages-auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/pages-auth/verify-email/verify-email.component';
import { LoginComponent } from '../../pages-auth/login/login.component';
import { RegisterComponent } from '../../pages-auth/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'sign-in', component: LoginComponent, canActivate: [AnonymousGuardService] },
    { path: 'sign-up', component: RegisterComponent, canActivate: [AnonymousGuardService] },
    { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AnonymousGuardService] },
    { path: 'verify-email', component: VerifyEmailComponent, canActivate: [AnonymousGuardService] }
];
