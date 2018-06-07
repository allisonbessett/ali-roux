import { TravelAlbum } from './travel-album';
import { TravelService } from '../travel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-travel-album',
    templateUrl: './travel-album.view.html',
    styleUrls: ['../../../scss/travel.scss'],
    providers: [TravelService]
  })

  export class TravelAlbumComponent implements OnInit {

    selectedAlbum: number;
    currentAlbum: TravelAlbum;

    albums: TravelAlbum[] = [
      {id: 1, name: 'Iceland', src:
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true'},
      {id: 2, name: 'Scotland', src:
      'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/scotland/cover.jpg'},
      {id: 3, name: 'Sweden', src:
      'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/lulea/sunken-ship-cover%20(3).jpg'}
  ];


    constructor (
      private router: Router,
      private route: ActivatedRoute,
      private travelService: TravelService
    ) {
    }

    ngOnInit() {
      console.log('onInit1');
      return this.albums;
      // this.albums = this.getAlbums();
      // console.log(this.route.children);
      // this.route.parent.children
      // .find(a => a.outlet === 'album')
      // .params
      // .subscribe((params: any) => {
      //   console.log('onInit2');
      //   if (params.id) {
      //     this.selectedAlbum = +params.id;
      //   }
      //   console.log('onInit3');
      // });
    }

    getAlbums() {
      console.log('getAlbum');
        return this.albums;
    }

    getAlbumsById(id) {
      console.log('getById1');
        return this.albums.find(album => album.id === Number(id));
    }

    showAlbum(clickedAlbum: TravelAlbum) {
      console.log('showAlbum1');
    this.router.navigate(['/travel', clickedAlbum.id]);
    console.log('showAlbum2');
    }
  }

