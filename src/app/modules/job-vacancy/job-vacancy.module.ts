import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobVacancyListComponent } from './job-vacancy-list/job-vacancy-list.component';
import { JobVacancyDetailComponent } from './job-vacancy-detail/job-vacancy-detail.component';
import { JobVacancyComponent } from './job-vacancy/job-vacancy.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule, CardModule, PanelModule, CarouselModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [JobVacancyListComponent, JobVacancyDetailComponent, JobVacancyComponent],
  imports: [
    CommonModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    DialogModule,
    CardModule,
    PanelModule,
    CarouselModule,
    DropdownModule,
    ChipsModule
  ]
})
export class JobVacancyModule { }
