import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Restobook } from '../../providers/restobook/restobook';
import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/register-customer/register-customer.html',
})
export class RegisterCustomerPage {
	
	name: any;
	userName: any;	
	emailAddress: any;
	password: any;	

	constructor(private nav: NavController, private restobookService: Restobook, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
		
		this.name = '';		
		this.userName = '';		
		this.emailAddress = '';
		this.password = '';		
	}
	
	presentLoadingDefault() {
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});

		loading.present();

		setTimeout(() => {
			loading.dismiss();
		}, 2000);
	}
	
	registerCustomer(){						
		
		this.presentLoadingDefault();
		
		let options = {
			name: this.name,			
			userName: this.userName,			
			emailAddress: this.emailAddress,
			password: this.password
				
		};

		this.restobookService.registerCustomer(options).then((data) => {									
			
			if(this.restobookService.isNullOrEmpty(data)){
				let alert = this.alertCtrl.create({
					title: 'Oops!',
					subTitle: 'Sorry, There is some internal error. Please contact system administrator',
					buttons: ['Ok']								
				});

				alert.present();
			} else {
				let alert = this.alertCtrl.create({
					title: 'Congrats!',
					subTitle: 'You are registered in restobook successfully.',
					buttons: [
								{	
									text: 'Ok'
									handler: data => {
										this.nav.push(LoginPage);
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
