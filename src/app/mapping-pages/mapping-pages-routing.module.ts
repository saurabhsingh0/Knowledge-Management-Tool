import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {MappingComponent} from './mapping.component';
import { PracsComponent } from './pracs/pracs.component';
import { CourseServeyComponent } from './course-servey/course-servey.component';
import { AttainmentSummaryComponent } from './attainment-summary/attainment-summary.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { EndSemesterComponent } from './end-semester/end-semester.component';
import { InternalAssesmentComponent } from './internal-assesment/internal-assesment.component'
const routes: Routes = [
  {
    path:'',
    component:MappingComponent,
    children:[
      {
        path:'page1',
        component:Page1Component,

      },
      {
        path:'page2',
        component:Page2Component,

      },
      {
        path:'page3',
        component:Page3Component,
      },
      {
        path:'pracs',
        component:PracsComponent,
      },
      {
        path:'course-survey',
        component:CourseServeyComponent
      },
      {
        path:'attainment-summary',
        component:AttainmentSummaryComponent
      },
      {
        path:'internal-assesment',
        component:InternalAssesmentComponent
      },
      {
        path:'end-semester',
        component:EndSemesterComponent
      },
      {
        path:'assignment',
        component:AssignmentComponent
      }
    ]
  }
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MappingPagesRoutingModule { }
