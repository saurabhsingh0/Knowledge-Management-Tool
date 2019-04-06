import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  single= [];
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Average Attainment';
  showYAxisLabel = true;
  yAxisLabel = 'Number';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  report=[
    {
      'subject':'Data Warehouse Mining',
      'attainment':[2.78,,2.83,2.68,2.68,2.68,,2.81,,2.78,,2.83]
    }
  ]

  constructor() {
    let i;
    for(i=0;i<12;i++){
      let report=this.report[0]['attainment'];
      let object={};
      if(isNaN(report[i])){
        object={
          'name': 'PO'+(i+1),
          'value':"",
        }
      }
      else {
        object={
          'name': 'PO'+(i+1),
          'value':report[i]+"",
        }
      }
      console.log(object);
      this.single.push(object);
    }
   }

  ngOnInit() {
  }

}
