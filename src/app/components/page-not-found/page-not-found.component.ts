import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from './../../models/animations/animation';

import { AppStateManagerService } from './../../services/app-state-manager.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  animations: [onMainContentChange]
})
export class PageNotFoundComponent implements OnInit {
  showPushNav: boolean;
  constructor(private appStateManagerService: AppStateManagerService) {
    this.appStateManagerService.showPushNav$.subscribe(res => {
      this.showPushNav = res;
    });
  }

  ngOnInit() {
    this.showPushNav = false;
  }

}
