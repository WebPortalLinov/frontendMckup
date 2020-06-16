import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { Paginator } from 'app/configs/paginator.config';
import { FormGroup } from '@angular/forms';
import { SelectItemGroup } from 'primeng/components/common/selectitemgroup';
import { onConstructTableHeader } from 'app/shared/utils/construct-table-header';
import {SelectItem} from 'primeng/api';
import { jobModel } from '../jobVacancyModel';

@Component({
  selector: 'app-job-vacancy',
  templateUrl: './job-vacancy.component.html',
  styleUrls: ['./job-vacancy.component.sass']
})


export class JobVacancyComponent implements OnInit {
  myAppDetailsColumn: TableColumn[];
  rowsPerPage = Paginator.rowsPerPage;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  formReady: FormGroup;
  moveTo: SelectItemGroup[];
  myAppData: any[];
  cols: any[];
  display: boolean = false;
  jobVacancy:jobModel[] = [
    {jobName:'Java Programmer', 
    jobCompany:'Lawencon', 
    jobLocation:'Jakarta, Indonesia', 
    jobSalary:'IDR 5.000.000',
    jobInfo:'Posted 1 month ago',
    jobBenefit:'',
    jobDescription:'',
    jobQualification:'',
    jobRequiredSkill:'',
    jobSummary:'',
  },
  ];

  // dropdown location
  citys: SelectItem[];
  selectedCity: string[] = [];
  cityItems: SelectItem[];

  // dropdown Job Level
  jobLevel: SelectItem[];
  selectedJobLevel: string[] = [];
  jobLevelItems: SelectItem[];

  // dropdown Job Type
  jobType: SelectItem[];
  selectedJobType: string[] = [];
  jobTypesItems: SelectItem[];

  // dropdown EmploymentType
  employment: SelectItem[];
  selectedEmployement: string[] = [];
  employmentItems: SelectItem[];

  // dropdown Job Function
  jobFunction: SelectItem[];
  selectedJobFunction: string[] = [];
  jobFunctionItems: SelectItem[];

  // dropdown Education
  education: SelectItem[];
  selectedEducation: string[] = [];
  educationItems: SelectItem[];

  // dropdown Company
  company: SelectItem[];
  selectedCompany: string[] = [];
  companyItems: SelectItem[];

  // dropdown Salary
  salary: SelectItem[];
  selectedSalary: string[] = [];
  salaryItems: SelectItem[];

  // drpodown Receive Alert
  alert: SelectItem[];
  selectedAlert: string[] = [];
  alertItems: SelectItem[];

  // drpodown Get Notified
  getNotified: SelectItem[];
  selectedNotified: string[] = [];
  notifiedItems: SelectItem[];
  
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

    this.alert = [
      {label: 'Weekly', value: 'Weekly'},
      {label: 'Daily', value: 'Daily'},
      {label: 'Monthly', value: 'Monthly'},
    ];
    this.alertItems = [];
    for (let i = 0; i < 10000; i++) {
      this.alertItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }
    
    this.getNotified = [
      {label: 'Email and Notification', value: 'Email and Notification'},
      {label: 'Email', value: 'Whats App'},
      {label: 'Notification', value: 'Facebook'},
    ];
    this.notifiedItems = [];
    for (let i = 0; i < 10000; i++) {
      this.notifiedItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.citys = [
      {label: 'Jakarta', value: 'Jakarta'},
      {label: 'Tanggerang', value: 'Tanggerang'},
      {label: 'Banten', value: 'Banten'},
      {label: 'Bandung', value: 'Bandung'},
      {label: 'Yogyakarta', value: 'Yogyakarta'},
      {label: 'Surabaya', value: 'Surabaya'},
      {label: 'Medan', value: 'Medan'},
      {label: 'Work Abroad', value: 'Work Abroad'},
      {label: 'Work From Home', value: 'Work From Home'},
    ];

    this.cityItems = [];
    for (let i = 0; i < 10000; i++) {
        this.cityItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.jobLevel = [
      {label: 'Internship / OJT', value: 'Internship / OJT'},
      {label: 'Entry Level / Junior Apprentice', value: 'Entry Level / Junior Apprentice'},
      {label: 'Associate / Supervisor', value: 'BanAssociate / Supervisorten'},
      {label: 'Mid-Senior Level / Manager', value: 'Mid-Senior Level / Manager'},
      {label: 'Director / Executive', value: 'Director / Executive'},
    ];

    this.jobLevelItems = [];
    for (let i = 0; i < 10000; i++) {
        this.jobLevelItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.jobType = [
      {label: 'Full Time', value: 'Full Time'},
      {label: 'Part Time', value: 'Part Time'},
    ];

    this.jobTypesItems = [];
    for (let i = 0; i < 10000; i++) {
        this.jobTypesItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.employment = [
      {label: 'Permanent', value: 'Permanent'},
      {label: 'Contract', value: 'Contract'},
      {label: 'Probation', value: 'Probation'},
    ];

    this.employmentItems = [];
    for (let i = 0; i < 10000; i++) {
        this.employmentItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.jobFunction = [
      {label: 'Accounting and Finance', value: 'Accounting and Finance'},
      {label: 'Administration and Coordination', value: 'Administration and Coordination'},
      {label: 'Architecture and Engineering', value: 'Architecture and Engineering'},
      {label: 'Arts and Sports', value: 'Arts and Sports'},
      {label: 'Customer Service', value: 'Customer Service'},
      {label: 'Education and Training', value: 'Education and Training'},
      {label: 'General Service', value: 'General Service'},
      {label: 'Health and Medical', value: 'Health and Medical'},
      {label: 'Hospitality and Tourism', value: 'Hospitality and Tourism'},
      {label: 'Human Resources', value: 'Human Resources'},
      {label: 'IT and Software', value: 'IT and Software'},
      {label: 'Legal', value: 'Legal'},
      {label: 'Management and Consultancy', value: 'Management and Consultancy'},
      {label: 'Manufacturing and Production', value: 'Manufacturing and Production'},
      {label: 'Media and Creatives', value: 'Media and Creatives'},
      {label: 'Mining & Energy', value: 'Mining & Energy'},
      {label: 'Oil & Gas', value: 'Oil & Gas'},
      {label: 'Public Service and NGOs', value: 'Public Service and NGOs'},
      {label: 'Safety and Security', value: 'Safety and Security'},
      {label: 'Sales and Marketing', value: 'Sales and Marketing'},
      {label: 'Sciences', value: 'Sciences'},
      {label: 'Supply Chain', value: 'Supply Chain'},
      {label: 'Writing and Content', value: 'Writing and Content'},
    ];

    this.jobFunctionItems = [];
    for (let i = 0; i < 10000; i++) {
        this.jobFunctionItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.education = [
      {label: 'Diploma 4', value: 'Diploma 4'},
      {label: 'Bachelor', value: 'Bachelor'},
      {label: 'Master', value: 'Master'},
      {label: 'Doctor', value: 'Doctor'},
      {label: 'Elementary School', value: 'Elementary School'},
      {label: 'Junior High School', value: 'Junior High School'},
      {label: 'Senior High School', value: 'Senior High School'},
      {label: 'Vocational High School', value: 'Vocational High School'},
    ];

    this.educationItems = [];
    for (let i = 0; i < 10000; i++) {
        this.educationItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.company = [
      {label: 'Lawencon', value: 'Lawencon'},
      {label: 'Linov Rocket Prestasi', value: 'Linov Rocket Prestasi'},
      {label: 'Tokopedia', value: 'Tokopedia'},
      {label: 'Shopee', value: 'Shopee'},
      {label: 'Grab', value: 'Grab'},
      {label: 'Gojek', value: 'Gojek'},
    ];

    this.companyItems = [];
    for (let i = 0; i < 10000; i++) {
        this.companyItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }

    this.salary = [
      {label: 'IDR 5.000.000', value: 'IDR 5.000.000'},
      {label: 'IDR 10.000.000', value: 'IDR 10.000.000'},
      {label: 'IDR 15.000.000', value: 'IDR 15.000.000'},
    ];

    this.salaryItems = [];
    for (let i = 0; i < 10000; i++) {
        this.salaryItems.push({label: 'Item ' + i, value: 'Item ' + i});
    }
  }

  ngOnInit() {
}
selChip:any[] = []
changeCity(event){
  this.selChip =[]
  this.selChip = this.selChip.concat(this.selectedCity,
    this.selectedCompany,this.selectedEducation,this.selectedEmployement,
    this.selectedJobFunction,this.selectedJobLevel,
    this.selectedJobType,this.selectedSalary)
}
selChipRemove(event){
  console.log("event", event);
  console.log("idx",this.selectedCity.indexOf(event.value));
  
  this.selectedCity.splice(this.selectedCity.indexOf(event.value),1)
  this.selectedCompany.splice(this.selectedCompany.indexOf(event.value),1)
  this.selectedEducation.splice(this.selectedEducation.indexOf(event.value),1)
  this.selectedEmployement.splice(this.selectedEmployement.indexOf(event.value),1)
  this.selectedJobFunction.splice(this.selectedJobFunction.indexOf(event.value),1)
  this.selectedJobLevel.splice(this.selectedJobLevel.indexOf(event.value),1)
  this.selectedJobType.splice(this.selectedJobType.indexOf(event.value),1)
  this.selectedSalary.splice(this.selectedSalary.indexOf(event.value),1)
  
}
salaShow:boolean = false
salaryClick(){
this.salaShow = !this.salaShow
}
  showDialog() {
    this.display = true;
  }
}

