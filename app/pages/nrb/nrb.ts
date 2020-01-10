import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HistoryPage} from '../history/history';
import {AimsPage} from '../aims/aims';
import {MuseumPage} from '../museum/museum';


/*
  Generated class for the NrbPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/nrb/nrb.html',
})
export class NrbPage {

  constructor(private navCtrl: NavController) {

  }
  
history(){
	this.navCtrl.push(HistoryPage);
	}
  
aims(){
	this.navCtrl.push(AimsPage);
	}

museum(){
	this.navCtrl.push(MuseumPage);
	}


}
