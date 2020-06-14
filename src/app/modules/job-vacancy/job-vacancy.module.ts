import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobVacancyListComponent } from './job-vacancy-list/job-vacancy-list.component';
import { JobVacancyDetailComponent } from './job-vacancy-detail/job-vacancy-detail.component';
import { JobVacancyComponent } from './job-vacancy/job-vacancy.component';
import { MultiSelectModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [JobVacancyListComponent, JobVacancyDetailComponent, JobVacancyComponent],
  imports: [
    CommonModule,
    MultiSelectModule,
    TableModule
  ]
})
export class JobVacancyModule { }
