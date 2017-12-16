export class Cryptocurrency {

  constructor(public id: string,
              public name: string,
              public symbol: string,
              public rank: number,
              public price_usd: string,
              public price_btc: string,
              public twenty_four_hour_volum_usd: string,
              public market_capusd: string,
              public available_supply: string,
              public total_supply: string,
              public percent_change_1h: string,
              public percent_change_24h: string,
              public percent_change_7d: string,
              public last_updated: string) {};
}
