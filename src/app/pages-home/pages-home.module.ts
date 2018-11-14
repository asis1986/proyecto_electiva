import { NgModule } from "@angular/core";
import { PagesHomeComponent } from './pages-home.component';
import { HeaderHomeComponent } from "./header-home/header-home.component";
import { SliderHomeComponent } from "./slider-home/slider-home.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { FooterHomeComponent } from "./footer-home/footer-home.component";
import { MzSidenavModule, MzIconModule, MzIconMdiModule } from "ngx-materialize";
import { PAGEHOME_ROUTING } from "./pages-home.routes";



@NgModule({
declarations:[
  PagesHomeComponent,
  HeaderHomeComponent,
  SliderHomeComponent,
  ContactsComponent,
  FooterHomeComponent
],
exports:[],
  imports: [MzSidenavModule,
    MzIconModule,
    MzIconMdiModule, PAGEHOME_ROUTING ]
})

export class PagesHomeModule{}