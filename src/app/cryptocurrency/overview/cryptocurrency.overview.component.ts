import {Component, OnInit} from "@angular/core";
import {CryptocurrencyRemoteService} from "../remote/cryptocurrency.remote.service";
import {Cryptocurrency} from "../remote/Cryptocurrency.class";
import {ProductService} from "../product/cryptocurrency.products.service";
import {Product} from "../product/Product.class";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "app-cryptocurrency.overview",
  templateUrl: "./cryptocurrency.overview.component.html",
  styleUrls: ["./cryptocurrency.overview.component.css"]
})
export class CryptocurrencyOverviewComponent implements OnInit {

  protected static MAX_AMOUNT_OF_PRODUCTS = 50;

  protected products: Product[] = [];
  cryptocurrencies: Cryptocurrency[] = [];
  typeAndAmountForm: FormGroup;

  constructor(private cryptocurrencyRemoteService: CryptocurrencyRemoteService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.typeAndAmountForm = this.createForm();
    this.fetchCryptocurrencies();
    this.fetchProducts();
  }

  private createForm(): FormGroup {
    return new FormGroup({
      cryptoType: new FormControl(),
      cryptoAmount: new FormControl()
    });
  }

  get maxAmountOfProducts(): number {
    return CryptocurrencyOverviewComponent.MAX_AMOUNT_OF_PRODUCTS;
  }

  private fetchCryptocurrencies(): void {
    this.cryptocurrencyRemoteService.getCryptocurrencyTop10()
      .subscribe(cryptocurrencies => {
        this.cryptocurrencies = cryptocurrencies;
        this.initializeForm();
      });
  }

  private initializeForm(): void {
    this.typeAndAmountForm.patchValue({cryptoType: this.cryptocurrencies[0], cryptoAmount: 15});
  }

  private fetchProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  protected getProductDetails(product: Product): String[] {
    const productAmount: number = this.getProductAmount(product);
    return Array(this.getToppedOfAmountOfProducts(productAmount)).fill(product.imgUrl);
  }

  private getToppedOfAmountOfProducts(productAmount: number): number {
    if (productAmount > CryptocurrencyOverviewComponent.MAX_AMOUNT_OF_PRODUCTS) {
      return CryptocurrencyOverviewComponent.MAX_AMOUNT_OF_PRODUCTS;
    }
    return productAmount;
  }

  protected getProductAmount(product: Product): number {
    return Math.floor(+this.typeAndAmountForm.value.cryptoType.price_usd
      * this.typeAndAmountForm.value.cryptoAmount / product.priceInDollar);
  }
}
