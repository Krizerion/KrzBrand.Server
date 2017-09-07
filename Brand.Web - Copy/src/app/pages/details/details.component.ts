import { Card } from './../../classes/card';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../classes/product';
import { GlobalDataService } from './../../services/global-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'krz-brand-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  private routeSubscribe: any;
  selectedCountry: string;
  selectedBrand: string;
  selectedType: string;
  pageTitle: string;
  tableData: Product[];
  brands: Card[] = [];
  colTitles: string[] = ["Product Id", "Name", "Date", "Price", "Gender", "Color"];
  allCountries: string[] = [];
  allBrands: string[] = [];
  allTypes: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private globalDataService: GlobalDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSubscribe = this.route.params.subscribe(params => {
       this.selectedCountry = params['country'];
       this.selectedBrand = params['brand'];
       this.selectedType = params['type'];
    });
    this.getProductsBySelectedFilters(this.selectedCountry, this.selectedBrand, this.selectedType);
    this.allCountries = this.globalDataService.allCountries;
    this.allBrands = this.globalDataService.allBrands;
    this.allTypes = this.globalDataService.allTypes;
    this.updateTitle();
  }

  updateTitle(): void {
    this.pageTitle =
        this.tableData.length + ' ' +
        this.selectedType.toUpperCase() +
        " PRODUCTS FOUND FOR " +
        this.selectedBrand.toUpperCase() +
        " IN " +
        this.selectedCountry.toUpperCase();
  }

  getProductsBySelectedFilters(country: string, brand: string, type: string): void {
    this.tableData = this.globalDataService.allProducts.filter(
        product => product.brand === brand &&
        product.country === country &&
        product.type === type
    );
  }

  changeCountry(country: string) {
    this.selectedCountry = country;
    this.updateRouteParams();
    this.getProductsBySelectedFilters(this.selectedCountry, this.selectedBrand, this.selectedType);
    this.updateTitle();
  }

  changeBrand(brand: string) {
    this.selectedBrand = brand;
    this.updateRouteParams();
    this.getProductsBySelectedFilters(this.selectedCountry, this.selectedBrand, this.selectedType);
    this.updateTitle();
  }

  changeType(type: string) {
    this.selectedType = type;
    this.updateRouteParams();
    this.getProductsBySelectedFilters(this.selectedCountry, this.selectedBrand, type);
    this.updateTitle();
  }

  updateRouteParams(): void {
    this.router.navigate(['/dashboard/' + this.selectedCountry + '/' + this.selectedBrand + '/' + this.selectedType]);
  }
}
