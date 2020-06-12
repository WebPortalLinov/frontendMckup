import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  completion: any

  constructor() { 
    this.completion = {
      datasets: [
        {
          data: [55, 45],
          backgroundColor: [
            "#36A2EB",
            "#C0C0C0"
          ]
        }
      ]
    }
  }

  ngOnInit() {
  }
}
