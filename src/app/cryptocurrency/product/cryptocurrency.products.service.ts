import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "./Product.class";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Array<Product>> {
    return this.http.get("assets/products.json");
  }

}
