import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

	constructor(private http: Http) {

	}
  
	contactNotification(data){

		return new Promise(resolve => {
		  let headers = new Headers();
		  headers.append('Content-Type', 'application/json');

		  this.http.post('http://182.18.152.39:8888/api/contact/email', JSON.stringify(data), {headers: headers})
			.map(res => res.json())
			.subscribe(data => {
			  resolve(data);
			});
		});

	}
  
	callApi(data){

		return new Promise(resolve => {
		  let headers = new Headers();
		  headers.append('Content-Type', 'application/json');

		  this.http.post('http://indware.co.in/NRB/service/call', JSON.stringify(data), {headers: headers})
			.map(res => res.json())
			.subscribe(data => {
			  resolve(data);
			});
		});

	}  	
  
	registerUser(data){

		return new Promise(resolve => {
		  let headers = new Headers();
		  headers.append('Content-Type', 'application/json');

		  this.http.post('http://indware.co.in/NRB/service/registeruser', JSON.stringify(data), {headers: headers})
			.map(res => res.json())
			.subscribe(data => {
			  resolve(data);
			});
		});

	} 	
	
	isNullOrEmpty(str) {
		return typeof str === 'undefined' || str === null || (typeof str === 'string' && str.length <= 0);
	}
	
	convertToArray(object) {
		if (this.isArray(object))
			return object;
		else
			return [ object ];
	}
	
	isArray(object) {

		if (typeof object === 'undefined')
			return false;
		return Object.prototype.toString.call(object).slice(8, -1) === 'Array';
	}	
}