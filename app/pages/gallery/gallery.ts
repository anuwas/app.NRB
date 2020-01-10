import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data/data';

/*
  Generated class for the GalleryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/gallery/gallery.html',
})
export class GalleryPage {

	imageList: any;	
	
	constructor(private navCtrl: NavController, private dataService: Data) {
		this.getGalleryImages();
	}
  
	getGalleryImages(){			
		let options = {
			action: 'gallery'			
		};

		this.dataService.callApi(options).then((data: any) => {							
			this.imageList = this.dataService.convertToArray(data);

			
			if(this.imageList.length > 0){
				// Need to implement
			} else {				
				// Need to implement
			}

		}, (err) => {
			console.log(err);
		});
		
	}			

}
