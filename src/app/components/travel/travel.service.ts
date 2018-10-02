import { TravelAlbums } from './travel';
import { Injectable } from '@angular/core';

@Injectable()
export class TravelService {

  private travelAlbums: TravelAlbums[] = [
    {id: 1, name: 'Iceland', src:
    'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true',
     photo: 'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/beach.jpg?raw=true'},
    {id: 2, name: 'Scotland', src:
    'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/scotland/cover.jpg'},
    {id: 3, name: 'Sweden', src:
    'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/lulea/sunken-ship-cover%20(3).jpg'}
];

constructor() {

}

getAlbums() {
  return this.travelAlbums;
}

getAlbumByID(id) {
  return this.travelAlbums.find(album => album.id === Number(id));
}
}
