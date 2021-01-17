import { AppStateManagerService } from './services/app-state-manager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private appStateManagerService: AppStateManagerService) {
  }
  showPushNav() {
    this.appStateManagerService.onButtonClick();
  }
}
