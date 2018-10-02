import { TravelService } from './travel.service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-travel',
    templateUrl: './travel.view.html',
    styleUrls: ['../../scss/travel.scss'],
    providers: [TravelService]
  })

  export class TravelComponent {
  }

