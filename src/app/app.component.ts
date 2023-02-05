import { Component } from '@angular/core';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/navigationbar/navigation-bar.js';
import '@material/web/navigationdrawer/navigation-drawer.js';
import '@material/web/navigationdrawer/navigation-drawer-modal.js';
import '@material/web/navigationtab/navigation-tab.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/fab/fab-extended.js';
import '@material/web/icon/icon.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/ripple/ripple.js';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {MatDrawerMode} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 1024px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.navMode = "over"
        this.defaultNavOpened = false
      } else {
        this.navMode = "side"
        this.defaultNavOpened = true
      }
    });
  }
  title = 'parabox-web-angular';
  faGithub = faGithub

  navMode: MatDrawerMode = "push"
  defaultNavOpened = true
}
