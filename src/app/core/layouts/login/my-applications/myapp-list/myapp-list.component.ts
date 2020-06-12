import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { Company } from 'app/core/models/company';

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
  myAppData: Company[];
  cols: any[];

  constructor() {

    this.myAppDetailsColumn = onConstructTableHeader([
      'Logo',
      'Job',
      'Progress',
      'Withdraw',
    ]),
    this.cols = [
      { field: 'vin', value: 'Vin' },
      { field: 'year', value: 'Year' },
      { field: 'brand', value: 'Brand' },
      { field: 'color', value: 'Color' }
    ];

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

  ngOnInit(){ 
  }

}
