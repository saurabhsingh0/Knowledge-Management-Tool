import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  preData = {
    questions:0,
    data:new Array(0)
  }
  table = {

  }
  subject={
    name:'DWM',
    stuents:[
      {
        rollNo:1,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:2,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:3,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:4,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:5,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:6,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:7,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:8,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:9,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:10,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:11,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      },
      {
        rollNo:12,
        marks:[
          {
            1:[{a:2},{b:2},{c:2},{d:2,},{e:2}],
            2:[{a:10},{b:2}],
            3:[{a:2},{b:2}],
            4:[{a:2},{b:2}],
            5:[{a:10},{b:10}]
          }
        ]
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

  openDetailsPopup(){
    this.preData.data = new Array(parseInt(this.preData.questions +""));
    for(let i=0;i<this.preData.data.length;i++){
      this.preData.data[i] = {};
      this.preData.data[i].subDivs = 0;
      this.preData.data[i].innerSubDivs = 0;

      let obj = {
        co:null,
        mark:null,
        btLo:null
      } 
    }
  }

  generateTable(){
    for(let questionIndex=0;questionIndex<this.preData.data.length;questionIndex++ ){
      let innerDivs = parseInt(this.preData.data[questionIndex].innerSubDivs);
      let divs = parseInt(this.preData.data[questionIndex].subDivs);
      for(let subIndex=0;subIndex<divs;subIndex++){
        this.preData.data[questionIndex][subIndex] = new Array(innerDivs).fill({
          co:null,
          mark:null,
          btLo:null
        });
        
      }
    };
    console.log(this.preData);
  }

}
