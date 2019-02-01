import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  title = 'co-poMapping';
  variable='saurabh';
  coLevels=['H','M','L'];
  level = [
    [
      'empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty',
    ],
    [
      'empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty',
    ],
    [
      'empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty',
    ],
    [
      'empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty',
    ],
    [
      'empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty',
    ],
    [
      'empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty','empty',
    ],
  ];
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  columns=[1,2,3,4,5,6,7,8,9,10,11,12];
  items = [
    [1, 2], 
    [3, 4],
    [5, 6]
];
Config = [
  {name: 'config1'}, 
  {name: 'config2'}, 
  {name: 'config3'}
];
configOpPoints = [
  [ 1, [ 'op1', 'OP1', 12, 23] ],
  [ 2, [ 'op2', 'OP2', 32, 43] ],
  [ 3, [ 'op3', 'OP3', 52, 63] ]
];
  constructor() { }

  ngOnInit() {
  }

}
