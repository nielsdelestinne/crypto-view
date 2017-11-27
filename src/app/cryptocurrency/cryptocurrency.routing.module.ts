import {RouterModule, Routes} from "@angular/router";
import {CryptocurrencyOverviewComponent} from "./overview/cryptocurrency.overview.component";
import {NgModule} from "@angular/core";

const CryptocurrencyRoutes: Routes = [
  { path: "cryptocurrency/overview", component: CryptocurrencyOverviewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(CryptocurrencyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CryptocurrencyRoutingModule {}
