import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { AppStateManagerService } from './../../services/app-state-manager.service';
import { animateText } from './../../models/animations/animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [animateText]
})
export class MenuComponent implements OnInit, OnChanges {

  @Input() showPushNav: boolean;
  @Input() currenPage: string;

  _showPushNav: boolean;
  public onHover = false;

  constructor(private appStateManagerService: AppStateManagerService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this._showPushNav = this.showPushNav;
    console.log(this.currenPage);
  }

  showFullNav() {
      this.onHover = this._showPushNav ? this.onHover : true;
      console.log('this._showPushNav ', this._showPushNav);
      console.log(this.currenPage);
  }

  showhalfNav() {
      this.onHover = this._showPushNav ? this.onHover : false;
  }

}
