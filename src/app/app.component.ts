import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'co-poMapping';
  coLevels=['H','M','L'];
  level;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado',1,2,3,4];
  rows=[1,2,3,4,5,6,7,8,9,10,11,12];
}
