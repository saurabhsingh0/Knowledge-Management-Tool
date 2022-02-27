import { Component, OnInit } from '@angular/core';
import { MappingServiceService } from '../../services/mapping/mapping-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-course-servey',
  templateUrl: './course-servey.component.html',
  styleUrls: ['./course-servey.component.scss']
})
export class CourseServeyComponent implements OnInit {
  coLevels;
  coPoMapping;
  // courseSurvey={
  //   subject:'DWM',
  //   survey:[
  //     {
  //       'courseOutcome':1,
  //       'responses':{
  //         'level-1':0,
  //         'level-2':0,
  //         'level-3':4,
  //         'level-4':33,
  //         'level-5':32
  //       }
  //     },
  //     {
  //       'courseOutcome':2,
  //       'responses':{
  //         'level-1':0,
  //         'level-2':0,
  //         'level-3':7,
  //         'level-4':33,
  //         'level-5':29
  //       }
  //     },
  //     {
  //       'courseOutcome':3,
  //       'responses':{
  //         'level-1':0,
  //         'level-2':0,
  //         'level-3':7,
  //         'level-4':40,
  //         'level-5':22
  //       }
  //     },
  //     {
  //       'courseOutcome':4,
  //       'responses':{
  //         'level-1':0,
  //         'level-2':0,
  //         'level-3':5,
  //         'level-4':39,
  //         'level-5':25
  //       }
  //     },
  //     {
  //       'courseOutcome':5,
  //       'responses':{
  //         'level-1':0,
  //         'level-2':1,
  //         'level-3':5,
  //         'level-4':35,
  //         'level-5':28
  //       }
  //     },
  //     {
  //       'courseOutcome':6,
  //       'responses':{
  //         'level-1':0,
  //         'level-2':0,
  //         'level-3':7,
  //         'level-4':36,
  //         'level-5':26
  //       }
  //     }
  //   ]
  // }
  courseSurvey={
    'subject':"DWM",
    'survey':[]
  }

  constructor(private mappingService:MappingServiceService,private router:Router) {
    let survey=this.mappingService.getCourseSurveyDetails();
    survey.forEach((snapshots)=>{
      let data=[];
      snapshots.forEach((snapshot)=>{
        data.push(snapshot.payload.val());
      });
      this.courseSurvey.survey=data;
      console.log("course survey")
      console.log(this.courseSurvey);
      this.coLevels=this.mappingService.level; 
      //Change this to coLevel  
      this.coPoMapping=this.mappingService.level;
      console.log("Mapping Levels");
      console.log(this.coPoMapping);
      this.calculateCourseSurveyAttainment();
    });
  }

  ngOnInit() {
  }
  calculateCourseSurveyAttainment(){
    this.courseSurvey.survey.forEach((survey)=>{
      //console.log(survey);
      let total=survey.responses["level-5"]+survey.responses["level-4"]+survey.responses["level-3"]+survey.responses["level-2"]+survey.responses["level-1"];
      let attainment=((3*(survey.responses["level-5"]+survey.responses["level-4"]))+
                      (2*(survey.responses["level-3"]))+
                      (survey.responses["level-2"]+survey.responses["level-1"]));
      attainment=attainment/total;
      survey['courseAttainment']=parseFloat(attainment+"").toFixed(3);                
    });
    console.log("in calculate course survey attainment");
    console.log(this.courseSurvey);
    this.calculateAverageCOAttainemnt();
  }

  calculateAverageCOAttainemnt(){
    let total=6;
    let att=[]
    for(let i=0;i<6;i++){
      let survey=this.courseSurvey.survey[i];
      console.log(survey['courseAttainment']);
      att.push({
        'co':i+1,
        'avgAttainment':survey['courseAttainment']
      })
    }
    this.mappingService.avgCOCourseServeyAttainment=att;
    console.log("Average Course Servey CO ");
    console.log(this.mappingService.avgCOCourseServeyAttainment);
    this.calCOPOMapping();
  }

  calCOPOMapping(){
    let map=JSON.parse(JSON.stringify(this.coPoMapping));
    console.log("map is");
    console.log(map);
    map.forEach((level,index)=>{
      let attainment=this.mappingService.avgCOCourseServeyAttainment[index]['avgAttainment'];
      level.forEach((outcome,i)=>{
        if(outcome=='H'){
          map[index][i]=attainment;
        }
        else if(outcome=='M'){
          map[index][i]=parseFloat(0.666*attainment+"").toFixed(3);
        }
        else if(outcome=='L'){
          map[index][i]=parseFloat(0.333*attainment+"").toFixed(3);
        }
        else if(outcome=='empty'){
          map[index][i]="";
        }
      });
    });
    // console.log("CO PO mapping is");
    // console.log(map);
    this.coPoMapping=map;
    console.log("CO PO mapping is");
    console.log(this.coPoMapping);
    this.calculateAvgPO();
  }

  calculateAvgPO(){
    let avgPo=[];
    let data=JSON.parse(JSON.stringify(this.coPoMapping));
    console.log(data);
    for(let i=0;i<12;i++){
      let sum=0;
      let count=0;
      for(let j=0;j<6;j++){
        if(data[j][i]){
          //console.log("i is "+i+" j is "+j +" "+data[j][i]);
          sum+=parseFloat(data[j][i]);
          count++;
        }
        else {
          //console.log("empty");
        }
      }
      if(sum==0){
        avgPo[i]="";
      }
      else {
        //console.log("sum is " +sum +" count is "+count);
        avgPo[i]=parseFloat(sum/count+"").toFixed(3);
        //console.log(avgPo[i]);
      }
    } 
    console.log("avg po attainment");
    //console.log(avgPo); 
    this.mappingService.avgPOCourseServeyAttainment=avgPo;
    console.log(this.mappingService.avgPOCourseServeyAttainment);
  }

  goToNext(){
    this.router.navigate(['/pages/attainment-summary']);
  }
}
