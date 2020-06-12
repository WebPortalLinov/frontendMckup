import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class MyProfileModule { }
