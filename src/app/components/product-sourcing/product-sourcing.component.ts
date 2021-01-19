import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material';
import { onMainContentChange } from './../../models/animations/animation';

import {PageEvent} from '@angular/material/paginator';

import { AppStateManagerService } from './../../services/app-state-manager.service';
@Component({
  selector: 'app-product-sourcing',
  templateUrl: './product-sourcing.component.html',
  styleUrls: ['./product-sourcing.component.css'],
  animations: [ onMainContentChange ]
})
export class ProductSourcingComponent implements OnInit {
  showPushNav: boolean;
  productFetched = false;
  searchText = '';
  dataAvailable = false;
  productSourceData: any;
  pageEvent: PageEvent;
  pageSize = 20;
  productDataStartPosition = 0;
  productDataEndPosition = this.pageSize;
  enDropDown;
  showLowToHigh = false;
  setClearFilter = false;
  supplierCountries: string[];
  sortValue = '';
  orderQuantity = null;
  minOrderQty = -1;
  orderPopUp = false;
  maxPrice = null;
  minPrice = null;
  minPriceFilter = null;
  maxPriceFilter = null;

  @ViewChild('defaultCountry') defaultCountry: MatSelect;
  @ViewChild('defaultProductType') defaultProductType: MatSelect;

  productType = [
    {displayText: 'trade assurance', value: 'isTradeAssuranceSupplier', checked: false},
    {displayText: 'verified', value: 'isAssessedSupplier', checked: false},
    {displayText: 'ready to ship', value: 'isReadyToShip', checked: false}
  ];
  filterElements = [];
  filterCountriesList = [];
  filterProductTypeList = [];
  constructor(private appStateManagerService: AppStateManagerService) {
    this.appStateManagerService.showPushNav$.subscribe(res => {
      this.showPushNav = res;
    });
  }

  ngOnInit() {
    this.showPushNav = false;
  }

  fetchdata() {
    this.appStateManagerService.getProductSourceData(() => {
      this.dataAvailable = true;
      this.productSourceData = this.appStateManagerService.productSourceData;
      this.enDropDown = new Array(this.productSourceData.productList.length);
      this.enDropDown.fill(false);
      this.supplierCountries =
        this.removeDuplicates(this.productSourceData.productList, 'supplierCountry');
    });
  }

  openAliSrc(url) {
    window.open(url);
  }
  pageChange(pageDetails: PageEvent) {
    this.productDataStartPosition = pageDetails.pageIndex * this.pageSize;
    this.productDataEndPosition =
      ((this.productDataStartPosition + this.pageSize) > this.productSourceData.productList.length) ?
      ((this.productSourceData.productList.length % this.pageSize) + this.productDataStartPosition)
      : (this.productDataStartPosition + this.pageSize);
  }
  toggleDropDown(elementIndex) {
    this.enDropDown[elementIndex] = !this.enDropDown[elementIndex];
  }

  sort(sortManner: string) {
    this.setClearFilter = true;
    if (sortManner === 'showHighToLow') {
      this.showLowToHigh = true;
      this.sortValue = 'sortHighToLow';
    } else if (sortManner === 'showLowToHigh') {
      this.showLowToHigh = false;
      this.sortValue = 'sortLowToHigh';
    }
  }

  clearAllFilters() {
    this.fetchdata();
    this.showLowToHigh = false;
    this.filterCountriesList = [];
    this.filterProductTypeList = [];
    this.setClearFilter = false;
    this.sortValue = '';
    this.minOrderQty = -1;
    this.productType.forEach(ele => ele.checked = false);
    [this.minPriceFilter, this.maxPriceFilter] = [null, null];
  }

  removeDuplicates(array, key: string) {
    const dummyObj = {};
    array.forEach(element => {
      if (element[key]) {
        const temp = element[key];
        dummyObj[temp] = true;
      }
    });
    return Object.keys(dummyObj);
  }

  valueChange(value, type) {
    this.setClearFilter = true;
    const dummyProdustList = [];
    console.log(value);
    if ('countries' === type && value !== '' ) {
      this.filterCountriesList = [];
      this.filterCountriesList.push(value);
    } else if ('productType' === type) {
        this.productType.forEach(ele => {
          if (ele.value === value) {
            ele.checked = !ele.checked;
          }
          if (ele.checked) {
            dummyProdustList.push(ele.value);
          }
        });
        this.filterProductTypeList = dummyProdustList;
      }
    }

  setMinOrderQty() {
    this.setClearFilter = true;
    this.minOrderQty = this.orderQuantity;
  }
  clearMinOrderQty() {
    this.orderQuantity = null;
    this.minOrderQty = this.orderQuantity;
  }

  setOrderPopUp(state) {
    console.log(state);
    this.orderPopUp = state === 'open' ? true : false;
  }

  setMinMaxPrice() {
    this.setClearFilter = true;
    [this.minPriceFilter, this.maxPriceFilter] = [parseInt(this.minPrice, 10), parseInt(this.maxPrice, 10)];
  }

  clearMinMaxPrice() {
    [this.minPrice, this.maxPrice] = [null, null];
    [this.minPriceFilter, this.maxPriceFilter] = [null, null];
  }

}
