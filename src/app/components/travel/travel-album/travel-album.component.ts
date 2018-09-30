import { Travel } from './../travel';
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
    albums: Travel[] = [];
    selectedAlbum: number;

    // currentAlbum: TravelAlbum;


    constructor (
      private router: Router,
      private route: ActivatedRoute,
      private travelService: TravelService
    ) {
    }

    ngOnInit() {
      console.log('onInit1');
      console.log(this.albums);
      // this.route.paramMap.subscribe(params => {
      //   console.log(params.get('photos'));
      // this.photos = params.get('photos');
      // });
      // return this.albums;
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
      this.albums = this.travelService.getAlbums();
      this.route.parent.children.find
      (a => a.outlet === 'photo').params.subscribe
      ((params: any) => {
        if (params.id) {
          this.selectedAlbum = +params.id;
        }
      });
    }

    // getAlbums() {
    //   console.log('getAlbum');
    //     return this.albums;
    // }


    getAlbumsByID(id: number) {
      // console.log(id);
      // console.log('getById1' + this.albums.find(album => album.id === Number(id)));
        // return this.albums.find(album => album.id === Number(id));
        this.selectedAlbum = id;
        this.router.navigate(['/album', {outlets: {'photo': [id]}}]);
    }

    // showAlbum(clickedAlbum: TravelAlbum) {
    //   console.log('showAlbum1');
    // this.router.navigate(['/travel', clickedAlbum.id]);
    // console.log('showAlbum2');
    // }
  }

