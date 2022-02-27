import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path:'pages',
        loadChildren:'./mapping-pages/mapping-pages.module#MappingPagesModule'
    },
    {
        path:'',
        loadChildren:'./pages/pages.module#PagesModule'
    },
    {
        path:'report',
        loadChildren:'./reporting/reporting.module#ReportingModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
