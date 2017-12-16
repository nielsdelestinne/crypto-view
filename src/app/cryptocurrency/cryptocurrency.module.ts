import {NgModule} from "@angular/core";
import {CryptocurrencyOverviewComponent} from "./overview/cryptocurrency.overview.component";
import {BrowserModule} from "@angular/platform-browser";
import {CryptocurrencyRemoteService} from "./remote/cryptocurrency.remote.service";
import {CommonModule} from "@angular/common";
import {CryptocurrencyRoutingModule} from "./cryptocurrency.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./product/cryptocurrency.products.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CryptocurrencyOverviewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CryptocurrencyRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CryptocurrencyRemoteService,
    ProductService
  ]
})
export class CryptocurrencyModule {}
