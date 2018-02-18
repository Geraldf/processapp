import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../camunda.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  gotData(): any {
    this.loading = false;

  }


  loading: boolean;
  public prozesse;
  constructor(private _camunda: CamundaService) { }

  ngOnInit() {

      this.getFoods();
  }

    getFoods() {
      this.loading = true;

      this._camunda.getProcesses().subscribe(
        data => {
        console.log(data);
        this.prozesse = data;
        },
        err => {
          console.log(err);
        },
        () => this.gotData()
      );
  }




  }


