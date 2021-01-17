import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppStateManagerService {

  showPushNav = false;
  showPushNav$: Subject<boolean> = new Subject(); // saves the state of side bar
  resourceData: any;
  resourceDataLoaded: boolean;
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
}
