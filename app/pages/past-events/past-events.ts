import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/past-events/past-events.html',
})
export class PastEventsPage {
	
	pastEventList: any;	
	
	constructor(private nav: NavController, private dataService: Data, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {		
		this.getPastEvents();	
	}		
	
	getPastEvents(){			
		let options = {
			action: 'pastevent'			
		};

		this.dataService.callApi(options).then((data: any) => {							
			this.pastEventList = this.dataService.convertToArray(data);
			if(this.pastEventList.length > 0){
				// Need to implement
			} else {				
				// Need to implement
			}

		}, (err) => {
			console.log(err);
		});
		
	}		
	
}
