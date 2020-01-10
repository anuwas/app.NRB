import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NetajiEarlyLifePage} from '../netaji-early-life/netaji-early-life';
import {NetajiAsLeaderOfCongressPage} from '../netaji-as-leader-of-congress/netaji-as-leader-of-congress';
import {NetajiAsLeaderOfTheInaPage} from '../netaji-as-leader-of-the-ina/netaji-as-leader-of-the-ina';

/*
  Generated class for the NetajiPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/netaji/netaji.html',
})
export class NetajiPage {

  constructor(private navCtrl: NavController) {

  }

netajiearly(){
	this.navCtrl.push(NetajiEarlyLifePage);
	}
	
	
netajileadercongress(){
	this.navCtrl.push(NetajiAsLeaderOfCongressPage);
	}
	
netajileaderina(){
	this.navCtrl.push(NetajiAsLeaderOfTheInaPage);
	}


}
