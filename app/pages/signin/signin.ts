import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';
import {DashboardPage} from '../dashboard/dashboard';
import {SignupPage} from '../signup/signup';

@Component({
  templateUrl: 'build/pages/signin/signin.html',
})
export class SigninPage {
	
	emailAddress: any;	
	password: any;
	loading: any;	

	constructor(private nav: NavController, private dataService: Data, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
				
		this.emailAddress = '';
		this.password = '';		
	}
	
	showLoader() {
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});

		this.loading.present();		
	}
	
	signup(){
		this.nav.push(SignupPage);
	}
	
	login(){		
	}		
	
	authenticateUser(){	
		this.showLoader();
		let options = {
			action:	'login',
			emailAddress: this.emailAddress,
			password: this.password				
		};

		this.dataService.callApi(options).then((data: any) => {			
			this.loading.dismiss();			
			if(data.status === 'success'){
				this.nav.push(DashboardPage);
			} else {				
				
				let alert = this.alertCtrl.create({
					title: 'Oops!',
					subTitle: 'Sorry, Please enter valid credentials or sign up',
					buttons: ['Ok']
				});

				alert.present();
			}

		}, (err) => {
			console.log(err);
		});
		
	}			

}
