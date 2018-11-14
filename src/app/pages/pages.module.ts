

// se crea un módulo independiente para administrar las páginas que se encuentran en la carpeta pages..
import { NgModule } from "@angular/core";


import { HomepageComponent } from "./homepage/homepage.component";
import { GraphicsComponent } from "./graphics/graphics.component";
import { PagesComponent } from "./pages.component";
//import { ChartsModule } from "ng2-charts";
import { SharedModule } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";

//creación del módulo
//componentes

@NgModule({
  declarations: [HomepageComponent, GraphicsComponent, PagesComponent],
  exports: [
    HomepageComponent,
    GraphicsComponent,
    PagesComponent,
    //ChartsModule
   
  ],

  imports: [SharedModule,PAGES_ROUTES]
})
export class PagesModule {}