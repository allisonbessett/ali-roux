import { TravelAlbum } from './../travel/travel';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TravelService } from '../travel/travel.service';

@Component({
    selector: 'app-travel-photo',
    templateUrl: './travel-photos.view.html'
  })

  export class TravelPhotosComponent implements OnInit {
    // photos: Photo[] = [];
    currentAlbum: TravelAlbum;
    // photos: string;

    constructor(
      private travelService: TravelService,
      private route: ActivatedRoute,
    ) {

    }

  //   photos: Photo[] = [
  //     {id: 1, name: 'Iceland', src:
  //     'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true'},
  // ];

    ngOnInit() {
      // this.route.params.subscribe(params => {
      //   console.log(params.get('photos'));
      // photos = params.get('photos');
      // });
      this.route.params.subscribe((params: {id: string}) => {
        this.currentAlbum = this.travelService.getAlbumByID(params.id);
      });
    }
  }
