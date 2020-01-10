//import {Component} from '@angular/core';
//import {Platform, ionicBootstrap} from 'ionic-angular';
//import {StatusBar} from 'ionic-native';

import {SigninPage} from './pages/signin/signin';
import {Data} from './providers/data/data';
import {DashboardPage} from './pages/dashboard/dashboard';

import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {GalleryPage} from './pages/gallery/gallery';
import {NetajiPage} from './pages/netaji/netaji';
import {NrbPage} from './pages/nrb/nrb';
import {ContactUsPage} from './pages/contact-us/contact-us';
//import {LogoutPage} from './pages/logout/logout';


@Component({
templateUrl: 'build/app.html'
  //template:'<ion-nav [root]="rootPage"></ion-nav>'
})

export class MyApp {

@ViewChild(Nav) nav: Nav;

  rootPage: any = SigninPage;
  pages: Array<{title: string, component: any}>;

  //constructor(platform: Platform) {
    //platform.ready().then(() => {
      //StatusBar.styleDefault();
    //});
  //}
  
  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: DashboardPage },
      { title: 'Netaji', component: NetajiPage },
	  { title: 'NRB', component: NrbPage },
	  { title: 'Gallery', component: GalleryPage },
	  { title: 'Contact Us', component: ContactUsPage },
	  { title: 'Logout', component: SigninPage }
    ];

  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}

ionicBootstrap(MyApp, [Data]);

//ionicBootstrap(MyApp);
