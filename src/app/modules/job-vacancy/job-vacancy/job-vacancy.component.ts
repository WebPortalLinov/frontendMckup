import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/components/common/selectitemgroup';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';

@Component({
  selector: 'app-job-vacancy',
  templateUrl: './job-vacancy.component.html',
  styleUrls: ['./job-vacancy.component.scss']
})
export class JobVacancyComponent implements OnInit {
  // cols: any[];
  // first = 0;
  // rows = 10;
  myAppDetailsColumn: TableColumn[];
  rowsPerPage = Paginator.rowsPerPage;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  formReady: FormGroup;
  moveTo: SelectItemGroup[];
  myAppData: any[];
  cols: any[];
  display: boolean = false;

  constructor() { 
    this.myAppDetailsColumn = onConstructTableHeader([
      'Logo',
      'Job',
      'Progress',
      'Withdraw',
    ]),
    this.cols = [
      'LOGO',
      'JOB',
      'Progress',
      'Withdraw'
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

  ngOnInit() {
  //   this.cols = [
  //     { field: 'job vacancy', header: 'JOB VACANCY' },
  //     { field: 'company', header: 'COMPANY' },
  //     { field: 'location', header: 'LOCATION' },
  //     { field: 'posting date', header: 'POSTING DATE' },
  //     { field: 'expiry date', header: 'EXPIRY DATE' },
  //     { field: 'action', header: 'ACTION' },
  // ];
}
showDialog() {
  this.display = true;
}

  // next() {
  //   this.first = this.first + this.rows;
  // }

  // prev() {
  //     this.first = this.first - this.rows;
  // }

  // reset() {
  //     this.first = 0;
  // }

  // isLastPage(): boolean {
  //     return this.first === (this.cols.length - this.rows);
  // }

  // isFirstPage(): boolean {
  //     return this.first === 0;
  // }
}
