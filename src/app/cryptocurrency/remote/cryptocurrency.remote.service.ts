import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Cryptocurrency} from "./Cryptocurrency.class";

@Injectable()
export class CryptocurrencyRemoteService {

  constructor(private http: HttpClient){};

  getCryptocurrencyTop10(): Observable<Array<Cryptocurrency>> {
    return this.http.get<Array<Cryptocurrency>>("https://api.coinmarketcap.com/v1/ticker/?limit=10");
  }

}
