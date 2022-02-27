import { Component, OnInit } from '@angular/core';
import { MappingServiceService } from '../../services/mapping/mapping-service.service'

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
  constructor(private mappingService:MappingServiceService) { }

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

  printLevel(){
    //console.log(this.level);
  }
  saveCOLevels(){
    this.mappingService.coLevels=this.level;
    console.log(this.mappingService.coLevels);
  }

  savePSOLevels(){
    this.mappingService.psoLevels=this.psoLevel;
    console.log(this.mappingService.psoLevels);
  }
}
