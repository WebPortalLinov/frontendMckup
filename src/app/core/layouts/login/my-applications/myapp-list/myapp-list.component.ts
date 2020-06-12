import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-myapp-list',
  templateUrl: './myapp-list.component.html',
  styleUrls: ['./myapp-list.component.scss']
})
export class MyappListComponent implements OnInit {
  myAppDetailsColumn: TableColumn[];
  rowsPerPage = Paginator.rowsPerPage;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  formReady: FormGroup;
  moveTo: SelectItemGroup[];

  constructor() {

    this.myAppDetailsColumn = onConstructTableHeader([
      'Logo',
      'Job',
      'Progress',
      'Withdraw',
    ]),
    this.moveTo = [
      {
          label: 'Move', 
          items: [
              {label: 'Application', value: 'Application'},
              {label: 'Asessment', value: 'Asessment'},
              {label: 'Interview', value: 'Interview'},
              {label: 'Offer', value: 'Offer'},
              {label: 'Onboarding', value: 'Onboarding'},
          ]
      }
    ];
   }

  ngOnInit() {
  }

}
