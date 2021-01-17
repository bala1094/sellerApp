import { AppStateManagerService } from './../../services/app-state-manager.service';
import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from './../../models/animations/animation';

import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-product-sourcing',
  templateUrl: './product-sourcing.component.html',
  styleUrls: ['./product-sourcing.component.css'],
  animations: [ onMainContentChange ]
})
export class ProductSourcingComponent implements OnInit {
  showPushNav: boolean;
  productFetched = false;
  searchText: String;
  dataAvailable = false;
  productSourceData: any;
  pageEvent: PageEvent;
  pageSize = 20;
  productDataStartPosition = 0;
  productDataEndPosition = this.pageSize;
  enDropDown;
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
}
