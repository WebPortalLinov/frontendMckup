import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobVacancyComponent } from '../job-vacancy/job-vacancy/job-vacancy.component';
import { JobVacancyListComponent } from '../job-vacancy/job-vacancy-list/job-vacancy-list.component';
import { JobVacancyDetailComponent } from '../job-vacancy/job-vacancy-detail/job-vacancy-detail.component';
import { MyProfileComponent } from '../my-profile/my-profile/my-profile.component';
import { MyApplicationsListComponent } from '../my-applications/my-applications-list/my-applications-list.component';
import { MyApplicationsDetailComponent } from '../my-applications/my-applications-detail/my-applications-detail.component';
import { MyApplicationsComponent } from '../my-applications/my-applications/my-applications.component';
import { JobAlertListComponent } from '../job-alert/job-alert-list/job-alert-list.component';
import { SavedJobsComponent } from '../saved-jobs/saved-jobs/saved-jobs.component';


const routes: Routes = [
  {
    path:'job-vacancy',
    component:JobVacancyComponent,
    children:[
    {
      path:'',
      component:JobVacancyListComponent,
    },
    {
      path:':uuid',
      component:JobVacancyDetailComponent,
    }
  ]
  },
  {
    path:'my-applications',
    component: MyApplicationsComponent,
    children:[
        {
            path: '',
            component:MyApplicationsListComponent,
        },
        {
            path:':uuid',
            component: MyApplicationsDetailComponent,
        }
    ]
  },
  {
    path:'my-profile',
    component:MyProfileComponent,
  },
  {
    path:'saved-jobs',
    component:SavedJobsComponent,
  },
  {
    path:'job-alert',
    component:JobAlertListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPortalRoutingModule { 

}
