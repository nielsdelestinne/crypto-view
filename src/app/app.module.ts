import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {CryptocurrencyModule} from "./cryptocurrency/cryptocurrency.module";
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    CryptocurrencyModule
  ],
  providers: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
