import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobPortalRoutingModule } from './job-portal-routing.module';
import { JobVacancyModule } from '../job-vacancy/job-vacancy.module';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { MyApplicationsModule } from '../my-applications/my-applications.module';
import { JobAlertModule } from '../job-alert/job-alert.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobPortalRoutingModule,
    JobVacancyModule,
    MyProfileModule,
    MyApplicationsModule,
    JobAlertModule
  ]
})
export class JobPortalModule { }
