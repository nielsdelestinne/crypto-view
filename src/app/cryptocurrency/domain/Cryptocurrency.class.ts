export class Cryptocurrency {

  constructor(private _id: string,
              private _name: string,
              private _symbol: string,
              private _rank: number,
              private _priceUsd: string,
              private _priceBtc: string,
              private _twentyFourHourVolumUsd: string,
              private _marketCapusd: string,
              private _availableSupply: string,
              private _totalSupply: string,
              private _percentChange1h: string,
              private _percentChange24h: string,
              private _percentChange7d: string,
              private _lastUpdated: string) {};


  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get symbol(): string {
    return this._symbol;
  }

  get rank(): number {
    return this._rank;
  }

  get priceUsd(): string {
    return this._priceUsd;
  }

  get priceBtc(): string {
    return this._priceBtc;
  }

  get twentyFourHourVolumUsd(): string {
    return this._twentyFourHourVolumUsd;
  }

  get marketCapusd(): string {
    return this._marketCapusd;
  }

  get availableSupply(): string {
    return this._availableSupply;
  }

  get totalSupply(): string {
    return this._totalSupply;
  }

  get percentChange1h(): string {
    return this._percentChange1h;
  }

  get percentChange24h(): string {
    return this._percentChange24h;
  }

  get percentChange7d(): string {
    return this._percentChange7d;
  }

  get lastUpdated(): string {
    return this._lastUpdated;
  }
}
