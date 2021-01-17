import { Component, OnInit } from '@angular/core';

import { onMainContentChange } from './../../models/animations/animation';
import { AppStateManagerService } from './../../services/app-state-manager.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
  animations: [ onMainContentChange ]
})
export class ResourcesComponent implements OnInit {
  showPushNav: boolean;
  activeTab: string;
  resourcesData: any;
  constructor(private appStateManagerService: AppStateManagerService) {
    this.appStateManagerService.showPushNav$.subscribe(res => {
      this.showPushNav = res;
    });
  }

  ngOnInit() {
    this.showPushNav = false;
    this.appStateManagerService.getResourceData(() => {
      this.activeTab = 'all';
      this.resourcesData = this.appStateManagerService.resourceData;
    });
  }

  showResources(tab) {
    this.activeTab = tab;
  }
}
