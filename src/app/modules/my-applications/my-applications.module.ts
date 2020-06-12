import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApplicationsListComponent } from './my-applications-list/my-applications-list.component';
import { MyApplicationsDetailComponent } from './my-applications-detail/my-applications-detail.component';
import { MyApplicationsComponent } from './my-applications/my-applications.component';


@NgModule({
  declarations: [MyApplicationsListComponent, MyApplicationsDetailComponent, MyApplicationsComponent],
  imports: [
    CommonModule
  ]
})
export class MyApplicationsModule { }
