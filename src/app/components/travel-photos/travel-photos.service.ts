import { Photo } from './photo';
import { Injectable } from '@angular/core';

@Injectable()
export class TravelPhotosService {
    private photos: Photo[] = [
        {id: 1, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/beach.jpg?raw=true'},
        {id: 2, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/gullfoss.jpg?raw=true'},
        {id: 3, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/column.jpg?raw=true'},
        {id: 4, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/dynjandi.jpg?raw=true'},
        {id: 5, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/blue-geyser.jpg?raw=true'},
        {id: 6, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/dynjandi-view.jpg?raw=true'},
        {id: 7, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/posing.jpg?raw=true'},
        {id: 8, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/geysir.jpg?raw=true'},
        {id: 9, src: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/vik.jpg?raw=true'}
    ];

    getPhotos() {
        return this.photos;
    }

    getPhotosById(id) {
        return this.photos.find(photos => photos.id === Number(id));
    }
}
