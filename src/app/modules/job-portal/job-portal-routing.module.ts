import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobVacancyComponent } from '../job-vacancy/job-vacancy/job-vacancy.component';
import { JobVacancyListComponent } from '../job-vacancy/job-vacancy-list/job-vacancy-list.component';
import { JobVacancyDetailComponent } from '../job-vacancy/job-vacancy-detail/job-vacancy-detail.component';


const routes: Routes = [
  {
    path:'job-vacancy',
    component:JobVacancyComponent,
    children:[{
      path:'',
      component:JobVacancyListComponent,
    },
    {
      path:':uuid',
      component:JobVacancyDetailComponent
    }
    
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobPortalRoutingModule { 

}
