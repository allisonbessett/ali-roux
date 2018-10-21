import { TravelAlbum } from './travel';
import { Injectable } from '@angular/core';

@Injectable()
export class TravelService {

  private travelAlbum: TravelAlbum[] = [
    {id: 1, name: 'Iceland', src:
    'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true',
     photo: [
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/beach-square.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/gullfoss.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/column.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/dynjandi.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/Iceland/geyser-cover.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/dynjandi-view.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/posing.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/geysir.jpg?raw=true',
       'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/iceland/vik.jpg?raw=true',
    ]
    },
    {id: 2, name: 'Scotland', src:
    'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/scotland/cover.jpg',
    photo: [
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/royal-mile.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/view-from-tantallon.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/edinburgh-castle.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/ruins.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/view-edinburgh.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/cover.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/church.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/me-tantallon.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/scotland/tantallon.jpg?raw=true',

    ]
  },
    {id: 3, name: 'Sweden', src:
    'https://raw.githubusercontent.com/allisonbessett/ali-roux/master/src/app/images/lulea/sunken-ship-cover%20(3).jpg',
    photo: [
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/gamla-stan.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/lulea-beach.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/walking-bothnia.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/trail.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/sunken-ship-cover%20(3).jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/lulea-snow.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/storforsen2.jpg?raw=true',
      'https://github.com/allisonbessett/ali-roux/blob/master/src/app/images/lulea/storforsen.jpg?raw=true',
    ]
    },
];

constructor() {
}

getAlbums() {
  return this.travelAlbum;
}

getAlbumByID(id) {
  return this.travelAlbum.find(travelAlbum => travelAlbum.id === Number(id));
}
}
