import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../pages-auth/login/login.component';
import { RegisterComponent } from '../../pages-auth/register/register.component';
import { ForgotPasswordComponent } from '../../pages-auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../pages-auth/verify-email/verify-email.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ]
})
export class AuthLayoutModule { }
