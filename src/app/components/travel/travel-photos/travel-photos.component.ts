import { TravelService } from './../travel.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { TravelAlbum } from '../travel';

@Component({
    selector: 'app-travel-photo',
    templateUrl: './travel-photos.view.html'
  })

  export class TravelPhotosComponent implements OnInit {

    currentAlbum: TravelAlbum;

    constructor(
      private travelService: TravelService,
      private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
      this.route.params.subscribe((params: {id: string}) => {
        this.currentAlbum = this.travelService.getAlbumByID(params.id);
      });
    }
  }
