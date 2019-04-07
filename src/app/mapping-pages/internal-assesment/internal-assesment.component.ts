import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-assesment',
  templateUrl: './internal-assesment.component.html',
  styleUrls: ['./internal-assesment.component.scss']
})
export class InternalAssesmentComponent implements OnInit {
  termtest1Mapping = {
    DWM:{
      students:[
        {
          rollNo:1,
          marks:[
            {
              1:[{a:2,co:0}],
              2:[{a:10,co:0}],
              3:[{a:2,co:0}],
              4:[{a:2,co:0}],
              5:[{a:10,co:2}]
            }
          ],
          co:[
          {
              total:0,
              percentage:0,          
              grandTotal:80
          },
          {
              total:0,
              percentage:0,          
              grandTotal:12
          },
          {
              total:0,
              percentage:0,          
              grandTotal:20
          },
          {
              total:0,
              percentage:0,          
              grandTotal:14
          },
          {
              total:0,
              percentage:0,          
              grandTotal:6
          },
          {
              total:0,       
              percentage:0,   
              grandTotal:2
          }
        ],
        },
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


  termtest2Mapping = {
    DWM:{
      students:[
        {
          rollNo:1,
          marks:[
            {
              1:[{a:2,co:0}],
              2:[{a:10,co:0}],
              3:[{a:2,co:0}],
              4:[{a:2,co:0}],
              5:[{a:10,co:2}]
            }
          ],
          co:[
          {
              total:0,
              percentage:0,          
              grandTotal:80
          },
          {
              total:0,
              percentage:0,          
              grandTotal:12
          },
          {
              total:0,
              percentage:0,          
              grandTotal:20
          },
          {
              total:0,
              percentage:0,          
              grandTotal:14
          },
          {
              total:0,
              percentage:0,          
              grandTotal:6
          },
          {
              total:0,       
              percentage:0,   
              grandTotal:2
          }
        ],
        },
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
  constructor() { }

  ngOnInit() {
    this.generateCo(this.termtest1Mapping.DWM.students);
    this.generateLvl(this.termtest1Mapping);
    this.calculateAverage(this.termtest1Mapping);

    this.generateCo(this.termtest2Mapping.DWM.students);
    this.generateLvl(this.termtest2Mapping);
    this.calculateAverage(this.termtest2Mapping);
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


  generateCo(subjectStudents){
    for(let student of subjectStudents){
      console.log("roll no="+student.rollNo);
      for(let questionNo of Object.keys(student.marks[0])){
        for(let question of student.marks[0][questionNo]){
          console.log(question.co);
          student.co[question.co].total += parseInt(question.a) || parseInt(question.b) || parseInt(question.c) || parseInt(question.d) || parseInt(question.e); 
        }
      }

      for(let co of student.co){
        co.percentage = parseFloat((co.total/co.grandTotal).toFixed(2)) * 100;
      }
    }
    
  }

}
