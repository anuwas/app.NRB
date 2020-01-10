import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/upcoming-events/upcoming-events.html',
})
export class UpcomingEventsPage {
	
	upcomingEventList: any;	
	
	constructor(private nav: NavController, private dataService: Data, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {		
		this.getUpcomingEvents();	
	}			
	
	getUpcomingEvents(){			
		let options = {
			action: 'upcomingevent'			
		};

		this.dataService.callApi(options).then((data: any) => {
			this.upcomingEventList = this.dataService.convertToArray(data);
			if(this.upcomingEventList.length > 0){
				// Need to implement
			} else {				
				// Need to implement
			}

		}, (err) => {
			console.log(err);
		});
		
	}	

}
