import { TravelPhotosService } from './travel-photos.service';
import { Photo } from './photo';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-travel-photos',
    templateUrl: './travel-photos.view.html'
  })

  export class TravelPhotosComponent implements OnInit {
    photos: Photo[]= [];
    currentPhoto: Photo;

    constructor(
      private travelPhotosService: TravelPhotosService,
      private route: ActivatedRoute,
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe((params: {id: string}) => {
        this.currentPhoto = this.travelPhotosService.getPhotosById(params.id);
      });
    }
  }
