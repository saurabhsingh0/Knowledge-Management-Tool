import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';
import { ReportingRoutingModule } from './reporting.routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    NgxChartsModule,
    // BrowserAnimationsModule
  ]
})
export class ReportingModule { }
