import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobPortalRoutingModule } from './job-portal-routing.module';
import { JobVacancyModule } from '../job-vacancy/job-vacancy.module';
import { MyProfileModule } from '../my-profile/my-profile.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobPortalRoutingModule,
    JobVacancyModule,
    MyProfileModule,
  ]
})
export class JobPortalModule { }
