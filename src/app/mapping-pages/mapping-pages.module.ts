import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappingPagesRoutingModule } from './mapping-pages-routing.module';
import { FormsModule} from '@angular/forms';
import {MappingComponent} from './mapping.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { PracsComponent } from './pracs/pracs.component';
import { CourseServeyComponent } from './course-servey/course-servey.component';
import { AttainmentSummaryComponent } from './attainment-summary/attainment-summary.component';
import { EndSemesterComponent } from './end-semester/end-semester.component';
import { InternalAssesmentComponent } from './internal-assesment/internal-assesment.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [Page1Component, Page2Component, Page3Component,MappingComponent, PracsComponent, CourseServeyComponent, AttainmentSummaryComponent, EndSemesterComponent, InternalAssesmentComponent, AssignmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MappingPagesRoutingModule
  ]
})
export class MappingPagesModule { }
