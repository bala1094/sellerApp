import { AppStateManagerService } from './../../services/app-state-manager.service';
import { Component, OnInit } from '@angular/core';
import { onMainContentChange } from './../../models/animations/animation';

@Component({
  selector: 'app-product-sourcing',
  templateUrl: './product-sourcing.component.html',
  styleUrls: ['./product-sourcing.component.css'],
  animations: [ onMainContentChange ]
})
export class ProductSourcingComponent implements OnInit {
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
