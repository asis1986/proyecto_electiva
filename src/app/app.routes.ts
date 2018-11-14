
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
//import { PagesComponent } from './pages/pages.component';
//import { GraphicsComponent } from './pages/graphics/graphics.component';
//import { HomepageComponent } from './pages/homepage/homepage.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
//import { PagesHomeComponent } from './pages-home/pages-home.component';

const routes: Routes = [
 
  //{ path: "home", component: PagesHomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "recover", component: RecoverPasswordComponent }
];

export const appRouting = RouterModule.forRoot(routes, { useHash: true });