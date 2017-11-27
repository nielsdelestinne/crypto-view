import { Component, OnInit } from '@angular/core';
import {CryptocurrencyRemoteService} from "../remote/cryptocurrency.remote.service";
import {Cryptocurrency} from "../domain/Cryptocurrency.class";

@Component({
  selector: 'app-cryptocurrency.overview',
  templateUrl: './cryptocurrency.overview.component.html',
  styleUrls: ['./cryptocurrency.overview.component.css']
})
export class CryptocurrencyOverviewComponent implements OnInit {

  cryptocurrencies: Cryptocurrency[] = [];

  constructor(private cryptocurrencyRemoteService: CryptocurrencyRemoteService) { }

  ngOnInit() {
    this.cryptocurrencyRemoteService.getCryptocurrencyTop10()
      .subscribe(cryptocurrencies => {
        this.cryptocurrencies = cryptocurrencies;
      });
  }

}
