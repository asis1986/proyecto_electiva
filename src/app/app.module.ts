
//Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MzSidenavModule } from "ngx-materialize";
import { MzIconModule, MzIconMdiModule } from "ngx-materialize";
import { PagesModule } from "./pages/pages.module";
import { PagesHomeModule } from "./pages-home/pages-home.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//Componentes 
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AdminComponent } from "./pages/admin/admin.component";

//rutas principales
import { appRouting } from "./app.routes";






@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    RecoverPasswordComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    MzSidenavModule,
    MzIconModule,
    MzIconMdiModule,
    appRouting,
    PagesHomeModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
