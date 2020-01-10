import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterRestaurantPage} from '../register-restaurant/register-restaurant';
import {RegisterCustomerPage} from '../register-customer/register-customer';
import {FindRestaurantPage} from '../find-restaurants/find-restaurants';
import {ViewRestaurantPage} from '../view-restaurants/view-restaurants';
import {ViewCustomerPage} from '../view-customers/view-customers';
import {CustomerPage} from '../customers/customers';
import {RestaurantPage} from '../restaurants/restaurants';
import {LoginPage} from '../login/login';
import {RestaurantProfilePage} from '../restaurant-profile/restaurant-profile';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private nav: NavController) {

  }
  
  login(){
  	this.nav.push(LoginPage);
  }
  
  registerRestaurant(){
  	this.nav.push(RegisterRestaurantPage);
  }
  
  registerCustomer(){
  	this.nav.push(RegisterCustomerPage);
  }
  
  findRestaurant(){
  	this.nav.push(FindRestaurantPage);
  }
  
  getRestaurants(){
  	this.nav.push(RestaurantPage);
  }
  
  getCustomers(){
  	this.nav.push(CustomerPage);
  }
  
  viewRestaurants(){
  	this.nav.push(ViewRestaurantPage);
  }
  
  viewCustomers(){
  	this.nav.push(ViewCustomerPage);
  }
  
  createRestaurantProfile(){
  	this.nav.push(RestaurantProfilePage);
  }
}
