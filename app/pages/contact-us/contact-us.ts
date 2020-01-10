import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {DashboardPage} from '../dashboard/dashboard';

@Component({
  templateUrl: 'build/pages/contact-us/contact-us.html',
})
export class ContactUsPage {

	fullName: any;
	email: any;	
	phoneNumber: any;
	comments: any;	
	loading: any;
	
	constructor(private nav: NavController, private dataService: Data, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
		this.fullName = '';		
		this.email = '';		
		this.phoneNumber = '';
		this.comments = '';				
	}
	
	showLoader() {
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});

		this.loading.present();

	}		
	
	contactUs(){						
		
		this.showLoader();
		
		let options = {
			fullName: this.fullName,			
			email: this.email,			
			phoneNumber: this.phoneNumber,
			comments: this.comments
				
		};

		this.dataService.contactNotification(options).then((data: any) => {									
			this.loading.dismiss();
			if(this.dataService.isNullOrEmpty(data)){
				let alert = this.alertCtrl.create({
					title: 'Oops!',
					subTitle: 'Sorry, There is some internal error. Please contact system administrator',
					buttons: ['Ok']								
				});

				alert.present();
			} else {
				let alert = this.alertCtrl.create({
					title: 'Congrats!',
					subTitle: 'Thanks for contacting US. We will get back shortly.',
					buttons: [
								{	
									text: 'Ok',
									handler: data => {
										this.nav.push(DashboardPage);
									}
								}	
							]
				});
				
				alert.present();
			}

		}, (err) => {
			console.log(err);
		});

	}	

}
