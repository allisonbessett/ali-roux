import { Album } from './travel';
import { Injectable } from '@angular/core';

@Injectable()
export class TravelService {
    private albums: Album[] = [
        {id: 1, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true'},
    ];

    getAlbums() {
        return this.albums;
    }

    getAlbumsById(id) {
        return this.albums.find(albums => albums.id === Number(id));
    }
}