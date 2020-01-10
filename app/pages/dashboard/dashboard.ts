import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Slides } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {SigninPage} from '../signin/signin';
import {UpcomingEventsPage} from '../upcoming-events/upcoming-events';
import {PastEventsPage} from '../past-events/past-events';
import {ContactUsPage} from '../contact-us/contact-us';

@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html',
})
export class DashboardPage {
	
	id: any;	
	eventList: any;	
	@Component('mySlider') slider: Slides;
	mySlideOptions: any;

	constructor(private nav: NavController, private dataService: Data, private alertCtrl: AlertController, private loadingCtrl: LoadingController, params: NavParams) {
		
		if(!this.dataService.isNullOrEmpty(params.get("id"))){	
			this.id = params.get("id");
		}						
		this.mySlideOptions = {
			initialSlide: 1,
			loop: true,
			autoplay: 1,
			speed: 3000
		};
		
		this.getCurrentEvents();
	}
	
	getCurrentEvents(){			
		let options = {
			action: 'currentevent'			
		};

		this.dataService.callApi(options).then((data: any) => {							
			this.eventList = this.dataService.convertToArray(data);
			if(this.eventList.length > 0){
				// Need to implement
			} else {				
				// Need to implement
			}

		}, (err) => {
			console.log(err);
		});
		
	}			
	
	goToSlide() {
		this.slider.slideTo(2, 500);
	}
	
	onSlideChanged() {
		let currentIndex = this.slider.getActiveIndex();
		console.log("Current index is", currentIndex);
	}
	
	upcomingEvents(){
		this.nav.push(UpcomingEventsPage);
	}

	pastEvents(){
		this.nav.push(PastEventsPage);
	}

	contactUs(){
		this.nav.push(ContactUsPage);
	}	

}
