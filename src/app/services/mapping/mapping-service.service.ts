import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MappingServiceService {
  // CO PO attainemnt for practicals
  avgCOPracsAttainment:Array<any>;
  avgPOPracsAttainment:Array<any>;
  // CO PO attainemnt for Course Survey
  avgCOCourseServeyAttainment:Array<any>;
  avgPOCourseServeyAttainment:Array<any>;
  // CO PO attainemnt for End Semester Exam
  avgCOEndSemAttainemnt:Array<any>;
  avgPOEndSemAttainemnt:Array<any>=["2.37","","2.47","2.33","2.33","2.33","","2.48","","2.37","","2.57"];
  // CO PO attainemnt for Internal Assesment Test(Term Test)
  avgCOInternalAssesmentAttainemnt:Array<any>;
  avgPOInternalAssesmentAttainemnt:Array<any>=["2.47","","2.47","2.33","2.33","2.33","","2.48","","2.37","","2.57"];
  // CO PO attainemnt for Assignments
  avgCOAssignmentAttainemnt:Array<any>;
  avgPOAssignmentAttainemnt:Array<any>=["2.97","","2.95","","","","","2.91","","2.92","","2.95"];
  avgAttainment:Array<any>;
  coLevels;
  level = [
    [
      'H','empty','empty','H','H','L','empty','H','empty','H','empty','empty',
    ],
    [
      'H','empty','M','M','L','M','empty','M','empty','L','empty','H',
    ],
    [
      'M','empty','L','L','M','H','empty','L','empty','L','empty','M',
    ],
    [
      'M','empty','H','empty','empty','empty','empty','H','empty','M','empty','L',
    ],
    [
      'L','empty','M','empty','empty','empty','empty','M','empty','M','empty','H',
    ],
    [
      'empty','empty','H','empty','empty','empty','empty','L','empty','empty','empty','M',
    ],
  ];
  psoLevels;
  courseSurvey={
    subject:'DWM',
    survey:[
      {
        'courseOutcome':1,
        'responses':{
          'level-1':0,
          'level-2':0,
          'level-3':4,
          'level-4':33,
          'level-5':32
        }
      },
      {
        'courseOutcome':2,
        'responses':{
          'level-1':0,
          'level-2':0,
          'level-3':7,
          'level-4':33,
          'level-5':29
        }
      },
      {
        'courseOutcome':3,
        'responses':{
          'level-1':0,
          'level-2':0,
          'level-3':7,
          'level-4':40,
          'level-5':22
        }
      },
      {
        'courseOutcome':4,
        'responses':{
          'level-1':0,
          'level-2':0,
          'level-3':5,
          'level-4':39,
          'level-5':25
        }
      },
      {
        'courseOutcome':5,
        'responses':{
          'level-1':0,
          'level-2':1,
          'level-3':5,
          'level-4':35,
          'level-5':28
        }
      },
      {
        'courseOutcome':6,
        'responses':{
          'level-1':0,
          'level-2':0,
          'level-3':7,
          'level-4':36,
          'level-5':26
        }
      }
    ]
  }
  
  constructor(private db: AngularFireDatabase) { }

  pushObject(){
    let i=0;
    this.db.database.ref('/department/'+i+'/year/'+3+'/divison/'+0+'/subjects/'+0+'/indirectAssesment/course-survey').set(this.courseSurvey);
  }

  getPracsDetails(){
    return this.db.list('/department/'+0+'/year/'+3+'/divison/'+0+'/subjects/'+0+'/directAssesment/pracs/marks').snapshotChanges();
  }

  getCourseSurveyDetails(){
    return this.db.list('/department/'+0+'/year/'+3+'/divison/'+0+'/subjects/'+0+'/indirectAssesment/course-survey/survey').snapshotChanges();
  }
}
