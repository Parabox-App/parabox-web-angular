import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
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
import '@material/web/list/list-divider.js';

import {faGithub, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {MatDrawerMode} from "@angular/material/sidenav";
import {fadeInAnimation} from "./animations";
import {ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation]
})
export class AppComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private contexts: ChildrenOutletContexts,
    private router: Router
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
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {

    });
    document.addEventListener('scroll', () => {
      this.pageScrolled = window.pageYOffset != 0
    });
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.url = event.url
      }
    })
  }

  ngOnInit() {
  }

  title = 'parabox-web-angular';
  faGithub = faGithub
  faTelegram = faTelegram
  faEnvelope = faEnvelope

  navMode: MatDrawerMode = "push"
  defaultNavOpened = true
  pageScrolled = false
  url = this.router.url

  scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
