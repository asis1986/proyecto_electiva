import { Routes,RouterModule } from "@angular/router";
import { PagesHomeComponent } from "./pages-home.component";
import { ContactsComponent } from './contacts/contacts.component';






const PagesHomeRoutes: Routes = [
  { path: "home", component: PagesHomeComponent },
  { path: "contacts", component: ContactsComponent }
];



export const PAGEHOME_ROUTING = RouterModule.forChild(PagesHomeRoutes);