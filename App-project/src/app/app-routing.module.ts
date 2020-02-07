import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  { path: '',pathMatch: 'full',component: HomeComponent},
  {
  path: 'login',
  component: LoginComponent,
  //canActivate: [AuthGuard]
  },
  {
  path: 'register',
  component: RegisterComponent,
//  canActivate: [AuthGuard]
  },
  //{path: 'verify-email-address', component: VerifyEmailComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
