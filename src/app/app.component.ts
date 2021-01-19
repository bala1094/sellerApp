import { AppStateManagerService } from './services/app-state-manager.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private appStateManagerService: AppStateManagerService, private router: Router) {
  }

  ngOnInit() {
    // this.router.navigate(['']);
  }

  showPushNav() {
    this.appStateManagerService.onButtonClick();
  }
}
