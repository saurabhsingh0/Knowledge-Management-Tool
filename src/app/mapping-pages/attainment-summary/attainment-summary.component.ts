import { Component, OnInit } from '@angular/core';
import { MappingServiceService } from '../../services/mapping/mapping-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-attainment-summary',
  templateUrl: './attainment-summary.component.html',
  styleUrls: ['./attainment-summary.component.scss']
})
export class AttainmentSummaryComponent implements OnInit {

  avgPOEndSem:Array<any>;
  avgPOIAT:Array<any>;
  avgPOSurvey:Array<any>;
  avgPOPracs:Array<any>;
  avgPOAssignment:Array<any>;
  avgPOAttainemnt:Array<any>;

  constructor(private mappingService:MappingServiceService, private router:Router) {
    //this.avgPOAssignment=this.mappingService.avgPOAssignmentAttainemnt;
    if(this.mappingService.avgPOAssignmentAttainemnt){
      this.avgPOAssignment=this.mappingService.avgPOAssignmentAttainemnt;
    }
    else {
      //this.router.navigate(['/pages/page1']);
      console.log("not set assignment");
    }
    // this.avgPOEndSem=this.mappingService.avgPOEndSemAttainemnt;
    if(this.mappingService.avgPOEndSemAttainemnt){
      this.avgPOEndSem=this.mappingService.avgPOEndSemAttainemnt;
    }
    else {
      //this.router.navigate(['/pages/page1']);
      console.log("not set assignment");
    }
    this.avgPOIAT=this.mappingService.avgPOInternalAssesmentAttainemnt;
    // this.avgPOPracs=this.mappingService.avgPOPracsAttainment;
    if(this.mappingService.avgPOPracsAttainment){
      this.avgPOPracs=this.mappingService.avgPOPracsAttainment;
    }
    else {
      console.log("not set pracs");
      this.router.navigate(['/pages/pracs']);
    }
    //this.avgPOSurvey=this.mappingService.avgPOCourseServeyAttainment;
    if(this.mappingService.avgPOCourseServeyAttainment){
      this.avgPOSurvey=this.mappingService.avgPOCourseServeyAttainment;
    }
    else {
      console.log("not set course-survey");
      this.router.navigate(['/pages/course-survey']);
    }
    this.calculateAvgPOAttainemnt();
  }

  ngOnInit() {
  }

  calculateAvgPOAttainemnt(){
    let length=this.avgPOEndSem.length;
    let data=[];
    for(let i=0;i<length;i++){
      let sum=0;
      let count=0;
      if(this.avgPOEndSem[i]){
        sum+=this.avgPOEndSem[i];
        count++;
      }
      else if(this.avgPOIAT[i]){
        sum+=this.avgPOIAT[i];
        count++;
      }
      else if(this.avgPOAssignment[i]){
        sum+=this.avgPOAssignment[i];
        count++;
      }
      else if(this.avgPOPracs[i]){
        sum+=this.avgPOPracs[i];
        count++;
      }
      else if(this.avgPOSurvey[i]){
        sum+=this.avgPOSurvey[i];
        count++;
      }
      //direct assesment sum is stored in var direct
      console.log(sum +" is sum and count is " +count);
      let direct=parseFloat((sum/count)+"").toFixed(3);
      data.push({
        'po':i+1,
        'avgAttainemnt':direct
      });
    }
    this.avgPOAttainemnt=data;
    console.log("avg po attainment");
    console.log(this.avgPOAttainemnt);
  }
}
