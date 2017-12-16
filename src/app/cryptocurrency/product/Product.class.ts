export class Product {

  constructor(private _name: String,
              private _priceInDollar: number,
              private _imgUrl: String) {}


  get name(): String {
    return this._name;
  }

  get priceInDollar(): number {
    return this._priceInDollar;
  }

  get imgUrl(): String {
    return this._imgUrl;
  }
}
