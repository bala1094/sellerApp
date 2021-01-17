import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'productSouring'
  })
};
@Injectable()
export class AppStateManagerService {

  showPushNav = false;
  showPushNav$: Subject<boolean> = new Subject(); // saves the state of side bar
  resourceData: any;
  resourceDataLoaded: boolean;
  productSourceData: any;
  constructor(private httpClient: HttpClient) {

   }


  onButtonClick() {
    this.showPushNav = !this.showPushNav;
    this.showPushNav$.next(this.showPushNav);
  }

  getResourceData(cb) {
    this.resourceDataLoaded = false;
    this.httpClient.get('assets/data/resource.json').subscribe(data  => {
      console.log(data);
      this.resourceData = data;
      this.resourceDataLoaded = true;
      cb();
    });
  }

  getProductSourceData(cb) {
    console.log('fetchProductSourceData');
    this.httpClient.post('http://demo8971001.mockable.io/product_source', null, httpOptions).subscribe(
      res => {
        this.productSourceData = res['data'];
        console.log(this.productSourceData);
        cb();
      }
    );
  }
}
