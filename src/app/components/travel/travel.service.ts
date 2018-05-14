import { TravelAlbum } from './travel-album';
import { Injectable } from '@angular/core';

@Injectable()
export class TravelService {
    private albums: TravelAlbum[] = [
        {id: 1, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true'},
    ];

    constructor() { }

    getAlbums() {
      console.log("getAlbum");
        return this.albums;
    }

    getAlbumsById(id) {
      console.log("getById1");
        return this.albums.find(album => album.id === Number(id));
    }
}
