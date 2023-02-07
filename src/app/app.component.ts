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

import { faGithub, faGooglePlay, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faBook, faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDrawerMode } from "@angular/material/sidenav";
import {fromEvent} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', [animate('0.5s 0.5s ease-in')]),
      transition('* => void', [animate('0.5s ease-in')])
    ])
  ],
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
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.columnNum = 1
      } else {
        this.columnNum = 2
      }
    });
    document.addEventListener('scroll', () => {
      this.pageScrolled = window.pageYOffset != 0
    })
  }

  title = 'parabox-web-angular';
  faGithub = faGithub
  faGooglePlay = faGooglePlay
  faTelegram = faTelegram
  faEnvelope = faEnvelope
  faBook = faBook
  faNewspaper = faNewspaper

  navMode: MatDrawerMode = "push"
  defaultNavOpened = true
  pageScrolled = false
  columnNum = 2
  featureNum = 0
  @ViewChild("download") downloadBlock: ElementRef | undefined;
  scrollToTop(){
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  scrollToDownload(){
    // @ts-ignore
    this.downloadBlock.nativeElement.scrollIntoView({behavior: "smooth"})
  }
  featurePlus(){
    this.featureNum = (this.featureNum + 1) % 8
  }
  featureDecrease(){
    this.featureNum = (this.featureNum + 7) % 8
  }


  testClick(){

  }
}
