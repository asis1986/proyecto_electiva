import { RouterModule,Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { GraphicsComponent } from "./graphics/graphics.component";





const PagesRoute: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "homepage", component: HomepageComponent },
      { path: "graphics", component: GraphicsComponent },
      { path: "", redirectTo: "/home", pathMatch: "full" }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(PagesRoute);