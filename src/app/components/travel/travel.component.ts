import { TravelService } from './travel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from './travel';

@Component({
    selector: 'app-travel',
    templateUrl: './travel.view.html',
    styleUrls: ['../../scss/travel.scss']
  })

  export class TravelComponent implements OnInit {
    albums: Album[] = [];
    selectedAlbum: number;

    constructor (
      private router: Router,
      private route: ActivatedRoute,
      private travelService: TravelService
    ) {}

    ngOnInit() {
      this.albums = this.travelService.getAlbums();
      this.route.parent.children.find(r => r.outlet === 'desc')
      .params.subscribe((params: any) => {
        if (params.id) {
          this.selectedAlbum = +params.id;
        }
      });
    }

    showDesc(id: number) {
      this.selectedAlbum = id;
      this.router.navigate(['/albums', {outlets: {'desc': [id]}}]);
    }
  }
