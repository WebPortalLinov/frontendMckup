import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobAlertListComponent } from './job-alert-list/job-alert-list.component';
import { JobAlertDetailComponent } from './job-alert-detail/job-alert-detail.component';



@NgModule({
  declarations: [JobAlertListComponent, JobAlertDetailComponent],
  imports: [
    CommonModule
  ]
})
export class JobAlertModule { }
