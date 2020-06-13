import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';


@NgModule({
  declarations: [SavedJobsComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class SavedJobsModule { }
