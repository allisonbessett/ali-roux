import { TravelService } from './travel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TravelAlbum } from './travel-album';

@Component({
    selector: 'app-travel',
    templateUrl: './travel.view.html',
    styleUrls: ['../../scss/travel.scss'],
    providers: [TravelService]
  })

  export class TravelComponent implements OnInit {
    albums: TravelAlbum[] = [];
    selectedAlbum: number;
    currentAlbum: TravelAlbum;


    constructor (
      private router: Router,
      private route: ActivatedRoute,
      private travelService: TravelService
    ) {}

    ngOnInit() {
      // this.route.params.subscribe((params: {id: string}) => {
      //   this.currentAlbum = this.travelService.getAlbumsById(params.id);
      // });
      console.log('onInit1');
      this.albums = this.travelService.getAlbums();
      this.route.parent.children
      .find(a => a.outlet === 'album')
      .params
      .subscribe((params: any) => {
        console.log('onInit2');
        if (params.id) {
          this.selectedAlbum = +params.id;
        }
        console.log('onInit3');
      });
    }

    showAlbum(id: number) {
      console.log('showAlbum1');
      this.selectedAlbum = id;
    this.router.navigate(['/travel', {outlets: {'album': [id]}}]);
    console.log('showAlbum2');
    }
  }

