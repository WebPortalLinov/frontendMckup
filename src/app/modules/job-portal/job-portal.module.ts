import { NgModule } from '@angular/core';

import { JobPortalRoutingModule } from './job-portal-routing.module';
import { JobVacancyModule } from '../job-vacancy/job-vacancy.module';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { MyApplicationsModule } from '../my-applications/my-applications.module';
import { JobAlertModule } from '../job-alert/job-alert.module';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    JobPortalRoutingModule,
    JobVacancyModule,
    MyProfileModule,
    MyApplicationsModule,
    JobAlertModule
  ]
})
export class JobPortalModule { }
