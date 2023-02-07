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
    trigger('fadeInOut', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', [animate('.2s .2s ease-in')]),
      transition('true => false', [animate('.2s ease-in')])
    ]),
    trigger('subjectSlideInOut', [
      state('false', style({ transform: 'translate(-50%, 0%)', opacity: 0 })),
      state('true', style({ transform: 'translate(-50%, -50%)', opacity: 1 })),
      transition('false => true', [animate('.5s ease')]),
      transition('true => false', [animate('.5s ease')])
    ]),
    trigger('slideInOut', [
      state('false', style({ transform: 'translateY(50%)', opacity: 0 })),
      state('true', style({ transform: 'translateY(0%)', opacity: 1 })),
      transition('false => true', [animate('.5s ease')]),
      transition('true => false', [animate('.5s ease')])
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
  ngOnInit() {
    setTimeout(() => {
      this.drawCanvas()
    }, 100)
    this.launchTransition()
    this.beginFeatureInterval()
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
  launchTransitionStep = 0
  featureInterval: any
  @ViewChild("download") downloadBlock: ElementRef | undefined;
  @ViewChild("canvas") canvas: ElementRef | undefined;
  drawCanvas(){
    if (this.canvas && this.canvas.nativeElement.getContext('2d')) {
      console.log("drawing canvas")
      const canvas = this.canvas.nativeElement
      let radius = 60
      let centerX = 400
      let centerY = 400
      let ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.strokeStyle = "rgb(159, 214, 124)"
        ctx.lineWidth = 2
        ctx.lineCap = "square"
        ctx.beginPath()
        for (let i = 0; i <= 360; i++) {
          let theta = i * Math.PI / 180
          let r = Math.pow((Math.sin(20 * theta) + 20), 0.5)
          let x = centerX + r * radius * Math.cos(theta)
          let y = centerY + r * radius * Math.sin(theta)
          if (i == 0){
            ctx.moveTo(x, y)
          }else{
            ctx.quadraticCurveTo(x, y, x, y)
          }
        }
        ctx.stroke()
      }
    } else {
      console.log("canvas not ready")
    }
  }
  scrollToTop(){
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  scrollToDownload(){
    // @ts-ignore
    this.downloadBlock.nativeElement.scrollIntoView({ behavior: "smooth"})
  }
  featurePlus(){
    this.featureInterval && clearInterval(this.featureInterval)
    this.featureNum = (this.featureNum + 1) % 8
    this.beginFeatureInterval()
  }
  featureDecrease(){
    this.featureInterval && clearInterval(this.featureInterval)
    this.featureNum = (this.featureNum + 7) % 8
    this.beginFeatureInterval()
  }
  launchTransition(){
    setTimeout(() => {
      this.launchTransitionStep = 1
      setTimeout(() => {
        this.launchTransitionStep = 2
      }, 200)
    }, 200)
  }

  beginFeatureInterval(){
    this.featureInterval = setInterval(() => {
      this.featurePlus()
    }, 5000)
  }


  testClick(){

  }
}
