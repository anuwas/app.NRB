import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {DashboardPage} from '../dashboard/dashboard';
import {SigninPage} from '../signin/signin';

@Component({
  templateUrl: 'build/pages/signup/signup.html',
})
export class SignupPage {
	
	fullName: any;
	email: any;	
	phoneNumber: any;
	password: any;	
	loading: any;	

	constructor(private nav: NavController, private dataService: Data, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
		
		this.fullName = '';		
		this.email = '';		
		this.phoneNumber = '';
		this.password = '';		
	}
	
	showLoader() {
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});

		this.loading.present();
	}
	
	signup(){
		
	}
	
	login(){
		this.nav.push(SigninPage);		
	}
	
	registerUser(){						
		
		this.showLoader();
		
		let options = {
			fullName: this.fullName,			
			emailAddress: this.email,			
			phoneNumber: this.phoneNumber,
			password: this.password
				
		};

		this.dataService.registerUser(options).then((data: any) => {									
			this.loading.dismiss();			
			if(data.status === 'success'){
				let alert = this.alertCtrl.create({
					title: 'Congrats!',
					subTitle: 'You are registered successfully.',
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
			} else {
				let alert = this.alertCtrl.create({
					title: 'Oops!',
					subTitle: 'Sorry, There is some internal error. Please contact system administrator',
					buttons: ['Ok']								
				});

				alert.present();
			}

		}, (err) => {
			console.log(err);
		});

	}			

}
