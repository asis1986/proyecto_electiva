
//Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MzSidenavModule } from "ngx-materialize";
import { MzIconModule, MzIconMdiModule } from "ngx-materialize";


//Componentes 
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { HeaderHomeComponent } from './pages-home/header-home/header-home.component';
import { PagesHomeComponent } from './pages-home/pages-home.component';
import { SliderHomeComponent } from './pages-home/slider-home/slider-home.component';

//Sístema de Rutas

import { appRouting } from "./app.routes";


//Módulo para crear gráficos  Ng2chrats
import { ChartsModule } from 'ng2-charts';
import { ContactsComponent } from './pages-home/contacts/contacts.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomepageComponent,
    GraphicsComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    RecoverPasswordComponent,
    HeaderHomeComponent,
    PagesHomeComponent,
    SliderHomeComponent,
    ContactsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MzSidenavModule,
    MzIconModule,
    MzIconMdiModule,
    appRouting,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
