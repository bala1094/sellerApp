import { Component, Input, OnChanges } from '@angular/core';

import { AppStateManagerService } from './../../services/app-state-manager.service';
import { animateText } from './../../models/animations/animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [animateText]
})
export class MenuComponent implements OnChanges {

  @Input() showPushNav: boolean;
  @Input() currenPage: string;

  _showPushNav: boolean;
  public onHover = false;

  constructor(private appStateManagerService: AppStateManagerService) { }

  ngOnChanges() {
    this._showPushNav = this.showPushNav;
  }

  showFullNav() {
      this.onHover = this._showPushNav ? this.onHover : true;
  }

  showhalfNav() {
      this.onHover = this._showPushNav ? this.onHover : false;
  }

  // when moving from one page to another through subject icon, then set push nav to false
  changeShowNavState() {
    if (this.appStateManagerService.showPushNav === true) {
      this.appStateManagerService.onButtonClick();
    }
  }

}
