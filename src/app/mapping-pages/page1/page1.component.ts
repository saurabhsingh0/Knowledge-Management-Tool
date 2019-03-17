import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  title = 'co-poMapping';
  table='firstTable';
  variable='saurabh';
  coLevels=['H','M','L'];
  psoColumns=[1,2,3,4];
  psoLevel=[
    [ 
      'empty','empty','empty','empty'
    ],
    [ 
      'empty','empty','empty','empty'
    ],
    [ 
      'empty','empty','empty','empty'
    ],
    [ 
      'empty','empty','empty','empty'
    ],
    [ 
      'empty','empty','empty','empty'
    ],
    [ 
      'empty','empty','empty','empty'
    ]
  ]
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
  columns=[1,2,3,4,5,6,7,8,9,10,11,12];
  constructor() { }

  ngOnInit() {
  }

  openTable(table){
    console.log(table);
    if(table=='secondTable'){
      this.table='secondTable';
    }
    else if(table=='firstTable'){
      this.table='firstTable';
    }

  }

}
