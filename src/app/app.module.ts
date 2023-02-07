import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RootComponent} from './root/root.component';
import {TermsComponent} from './terms/terms.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRippleModule} from "@angular/material/core";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HoverClassDirective} from './hover-class.directive';
import {MatGridListModule} from "@angular/material/grid-list";
import {PrivacyComponent} from './privacy/privacy.component';

const appRoutes: Routes = [
  {path: '', component: RootComponent, data: {animation: 'RootPage'}},
  {path: 'terms', component: TermsComponent, data: {animation: 'TermsPage'}},
  {path: 'privacy', component: PrivacyComponent, data: {animation: 'PrivacyPage'}}
];

@NgModule({
  declarations: [
    AppComponent,
    HoverClassDirective,
    TermsComponent,
    RootComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatRippleModule,
    FontAwesomeModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
