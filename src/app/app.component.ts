import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
    template: `
    <div class="wrapper">
        <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'app';
}
