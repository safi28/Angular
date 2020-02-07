import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureInnerPagesGuard } from '../guard/secured-inner-pages.guard';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { AuthGuard } from '../guard/auth.guard';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/components/verify-email/verify-email.component';



const routes: Routes = [
//   { path: '',component: HomeComponent},
//   {
//   path: 'login',
//   component: LoginComponent,
//  // canActivate: [AuthGuard]
//   },
//   {
//   path: 'register',
//   component: RegisterComponent,
// //  canActivate: [AuthGuard]
//   },
//   //{path: 'verify-email-address', component: VerifyEmailComponent},
//   { path: '**', redirectTo: '' }

// { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
//   { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
//   { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
//   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
//   { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
//   { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
