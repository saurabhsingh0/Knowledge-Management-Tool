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

  };

  Object = Object;

  subject:any={ //for semester mapping
    DWM:{
      students:[
      {
        rollNo:1,
        marks:[
        ],
        co:[
        {
            total:0,
            percentage:0,          
            grandTotal:0
        },
        {
            total:0,
            percentage:0,          
            grandTotal:0
        },
        {
            total:0,
            percentage:0,          
            grandTotal:0
        },
        {
            total:0,
            percentage:0,          
            grandTotal:0
        },
        {
            total:0,
            percentage:0,          
            grandTotal:0
        },
        {
            total:0,       
            percentage:0,   
            grandTotal:0
        }
      ],
      },
      // {
      //   rollNo:2,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:18
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:12
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:4
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:14
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:6
      //     },
      //     {
      //         total:0,   
      //         percentage:0,       
      //         grandTotal:2
      //     }
      //   ],
      // },
      
      // {
      //   rollNo:3,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,     
      //       percentage:0,     
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:4,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,     
      //       percentage:0,     
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:5,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,     
      //       percentage:0,     
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:6,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,     
      //       percentage:0,     
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:7,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,     
      //       percentage:0,     
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:8,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,   
      //       percentage:0,       
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:9,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,     
      //       percentage:0,     
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:10,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,          
      //       grandTotal:2,
      //       percentage:0,
      //   }
      // ],
      // },
      // {
      //   rollNo:11,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:18
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:12
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:4
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:14
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:6
      //   },
      //   {
      //       total:0,
      //       percentage:0,          
      //       grandTotal:2
      //   }
      // ],
      // },
      // {
      //   rollNo:12,
      //   marks:[
      //     {
      //       1:[{a:2,co:0},{b:2,co:0},{c:2,co:1},{d:2,co:2},{e:2,co:3}],
      //       2:[{a:10,co:0},{b:2,co:0}],
      //       3:[{a:2,co:3},{b:2,co:4}],
      //       4:[{a:2,co:4},{b:2,co:5}],
      //       5:[{a:10,co:0},{b:10,co:1}]
      //     }
      //   ],
      //   co:[
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:18
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:12
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:4
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:14
      //     },
      //     {
      //         total:0,
      //         percentage:0,          
      //         grandTotal:6
      //     },
      //     {
      //         total:0,          
      //         grandTotal:2
      //     }
      //   ],
      // }
    ]
  },

  levels:[
    {
     0:0,
     1:0,
     2:0,
     3:0,
     4:0,
     5:0
    },
    {
     0:0,
     1:0,
     2:0,
     3:0,
     4:0,
     5:0
    },
    {
     0:0,
     1:0,
     2:0,
     3:0,
     4:0,
     5:0
    }
  ],
  average:[
    
  ]
  };

  studentPrototype = null;
  rollNumberCounter = 1;

  

  
    
  constructor() { }

  ngOnInit() {
    // this.generateCo(this.subject.DWM.students);
    
    
    // this.generateLvl(this.subject);
    // this.calculateAverage(this.subject);
    // console.log(this.subject);
      
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
    // for(let questionIndex=0;questionIndex<this.preData.data.length;questionIndex++ ){
    //   let innerDivs = parseInt(this.preData.data[questionIndex].innerSubDivs);
    //   let divs = parseInt(this.preData.data[questionIndex].subDivs);
    //   for(let subIndex=0;subIndex<divs;subIndex++){
    //     this.preData.data[questionIndex][subIndex] = new Array(innerDivs).fill({
    //       co:null,
    //       mark:null,
    //       btLo:null
    //     });
        
    //   }
    // };
    console.log(this.preData);
    for(let student of this.subject.DWM.students){
      let questionNo = 1;
      for(let question of this.preData.data){
        student.marks[questionNo] = [];
        let subQuestion = 97;
        for(let innerDiv of question.innerSubDivs){
          let alphabeticalSubQuestion = String.fromCharCode(subQuestion);
          let q = {};
          q[alphabeticalSubQuestion] = 0;
          q["co"] = parseInt(innerDiv.co[innerDiv.co.length-1])-1;
          student.co[q["co"]].grandTotal+= parseInt(innerDiv.marks);  
          student.marks[questionNo].push(q);
          subQuestion++;
        }
        questionNo++;
      }
      student.marks.splice(0,1);
    }
    this.studentPrototype = JSON.parse(JSON.stringify(this.subject.DWM.students[0]));
    console.log(this.subject);
    
  }

  generateCo(subjectStudents){
    console.log(this.preData);
    for(let student of subjectStudents){
      console.log("roll no="+student.rollNo);
      for(let questionNo of student.marks){
        for(let question of questionNo){
          console.log(question.co);
          student.co[question.co].total += parseInt(question.a) || parseInt(question.b) || parseInt(question.c) || parseInt(question.d) || parseInt(question.e); 
        }
      }

      for(let co of student.co){
        co.percentage = parseFloat((co.total/co.grandTotal).toFixed(2)) * 100;
      }
    }
    
  }

  changeSubQuest(subDiv:number,index:number){
    console.log(subDiv);
    console.log(index);
    let question=this.preData.data[index];
    console.log(question);
    let data=[];
    for(let i=0;i<subDiv;i++){
      let object={
        'marks':0,
        'co':''
      }
      data.push(object);
    }
    question['innerSubDivs']=data;
    console.log(data);
    console.log(this.preData);
  }

  generateLvl(testType){
    for(let student of testType.DWM.students){
      let coIndex = 0;
      for(let co of student.co){
        if(co.percentage>70){
          testType.levels[2][coIndex]++;
        }
        else if(co.percentage>50 && co.percentage <= 70){
          testType.levels[1][coIndex]++;
        }
        else{
          testType.levels[0][coIndex]++;
        }
        coIndex++;
      }
    }
  }

  calculateAverage(testType){
    let lengthOfCo = Object.keys(testType.levels[0]).length;
    for(let i = 0;i<lengthOfCo;i++){
      let totalStudents = testType.DWM.students.length;
      let average = (3 * testType.levels[2][i] + 2 * testType.levels[1][i] + testType.levels[0][i])/totalStudents;
      testType.average.push(average);
    }
  }

  addNewStudent(){
    this.rollNumberCounter++;
    let student = this.studentPrototype;
    student.rollNo = this.rollNumberCounter;
    this.subject.DWM.students.push(student);
    console.log(this.subject);
  }

  generateStats(){
    this.generateCo(this.subject.DWM.students);
    
    
    this.generateLvl(this.subject);
    this.calculateAverage(this.subject);
  }

}