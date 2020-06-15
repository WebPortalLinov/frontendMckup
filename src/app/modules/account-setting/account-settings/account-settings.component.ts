import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  countryCode: string;
  countryCodes: string[] = ["Indonesia - ID (+62)", "Malaysia - MY (+60)", "Singapura - SG (+65)"];
  results: any[];

  constructor() { }

  ngOnInit() {
  }

  search(event) {
    this.results = [];
    for(let i = 0; i < this.countryCodes.length; i++) {
        let brand = this.countryCodes[i];
        if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.results.push(brand);
        }
    }
}

}
