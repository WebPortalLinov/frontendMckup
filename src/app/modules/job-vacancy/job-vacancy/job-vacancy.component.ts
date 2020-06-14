import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-vacancy',
  templateUrl: './job-vacancy.component.html',
  styleUrls: ['./job-vacancy.component.scss']
})
export class JobVacancyComponent implements OnInit {
  cols: any[];

  first = 0;

  rows = 10;

  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'job vacancy', header: 'JOB VACANCY' },
      { field: 'company', header: 'COMPANY' },
      { field: 'location', header: 'LOCATION' },
      { field: 'posting date', header: 'POSTING DATE' },
      { field: 'expiry date', header: 'EXPIRY DATE' },
      { field: 'action', header: 'ACTION' },
  ];
}

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.first === (this.cols.length - this.rows);
}

isFirstPage(): boolean {
    return this.first === 0;
}
}
