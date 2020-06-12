import { NgModule } from '@angular/core';

import { JobPortalRoutingModule } from './job-portal-routing.module';
import { JobVacancyModule } from '../job-vacancy/job-vacancy.module';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    JobPortalRoutingModule,
    JobVacancyModule,
    MyProfileModule,
  ]
})
export class JobPortalModule { }
