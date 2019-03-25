import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pracs',
  templateUrl: './pracs.component.html',
  styleUrls: ['./pracs.component.scss']
})
export class PracsComponent implements OnInit {

  pracs={
    subject:'DWM',
    marks:[
      {'rollNo':1,'pracs 1':95,'pracs 2':60,'pracs 3':90,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':2,'pracs 1':65,'pracs 2':90,'pracs 3':60,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':3,'pracs 1':55,'pracs 2':80,'pracs 3':50,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':4,'pracs 1':55,'pracs 2':90,'pracs 3':50,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':5,'pracs 1':95,'pracs 2':50,'pracs 3':40,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':6,'pracs 1':95,'pracs 2':90,'pracs 3':30,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':7,'pracs 1':95,'pracs 2':40,'pracs 3':30,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':8,'pracs 1':45,'pracs 2':90,'pracs 3':90,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':9,'pracs 1':95,'pracs 2':80,'pracs 3':90,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':10,'pracs 1':75,'pracs 2':90,'pracs 3':60,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':11,'pracs 1':45,'pracs 2':80,'pracs 3':60,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
      {'rollNo':12,'pracs 1':35,'pracs 2':70,'pracs 3':90,'pracs 4':95,'pracs 5':90,'pracs 6':79,'pracs 7':80,'pracs 8':75,'pracs 9':90,'pracs 10':85},
    ],
    levels:[],
    coMapping:[],
  }

  constructor() {
    console.log(this.pracs);
    let total=Object.keys(this.pracs.marks[0]).length-1;
    let level={
      'level-1':0,
      'level-2':0,
      'level-3':0
    }
    for(let i=1;i<=total;i++){
      let object={
        'pracs':i,
        'level':level
      }
      this.pracs.levels.push(object);
    }
    let levels123=JSON.parse(JSON.stringify(this.pracs.levels));
    this.pracs.marks.forEach((studentMarks)=>{
      let keys=Object.keys(studentMarks);
      let length=Object.keys(studentMarks).length;
      for(let i=1;i<length;i++){
        let key=keys[i];
        let pracNum=parseInt(keys[i].split(" ")[1]);
        //console.log(key+"\t" +pracNum);
        let marks=studentMarks[key];
        //console.log(marks);
        let levels=levels123[pracNum-1];
        //console.log(levels);
        if(marks>=70){
          levels.level['level-3']=levels.level['level-3']+1;
          //let updatedValue=JSON.parse(JSON.stringify(levels));
          //console.log(levels);
          //console.log("level 3 is updated"+levels.level['level-3']);
        }
        else if(marks >=50 && marks<70){
          levels.level['level-2']=levels.level['level-2']+1;
        }
        else if(marks<50){
          levels.level['level-1']=levels.level['level-1']+1;
        }
        else {
          console.log("error");
        }
      }
    });
    this.pracs.levels=levels123;
    console.log("pracs info");
    console.log(this.pracs);
    //co-mapping
    this.pracs.levels.forEach((level,index)=>{
      // let i=3*level.level["level-3"];
      // console.log(i); 
      // let j=2*level.level["level-3"]
      let coAttainment=((3*level.level["level-3"])+(2*level.level["level-2"])+level.level["level-1"])/Object.keys(this.pracs.marks).length;
      this.pracs.coMapping.push({
        'pracs':index+1,
        'co-attainment':parseFloat(coAttainment+'').toFixed(2),
      });
    })
   }

  ngOnInit() {
  }

}
