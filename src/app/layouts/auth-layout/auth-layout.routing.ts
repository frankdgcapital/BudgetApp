import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from 'src/app/pages-auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/pages-auth/verify-email/verify-email.component';
import { LoginComponent } from '../../pages-auth/login/login.component';
import { RegisterComponent } from '../../pages-auth/register/register.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'sign-in',          component: LoginComponent },
    { path: 'sign-up',       component: RegisterComponent },
    { path: 'forgot-password',       component: ForgotPasswordComponent },
    { path: 'verify-email',       component: VerifyEmailComponent }
];
