import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

import { MzSidenavModule } from "ngx-materialize";
import { MzIconModule, MzIconMdiModule } from "ngx-materialize";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations:[HeaderComponent],
  exports: [HeaderComponent],
  imports: [MzIconModule, MzIconMdiModule, MzSidenavModule,RouterModule]
})

export class SharedModule{}