import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApplicationsListComponent } from './my-applications-list/my-applications-list.component';
import { MyApplicationsDetailComponent } from './my-applications-detail/my-applications-detail.component';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [MyApplicationsListComponent, MyApplicationsDetailComponent],
  imports: [
    CommonModule,
    MultiSelectModule
  ]
})
export class MyApplicationsModule { }
