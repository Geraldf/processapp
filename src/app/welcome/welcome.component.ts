import { Component, OnInit } from '@angular/core';
import {CamundaService} from '../camunda.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  loading: boolean;
  public prozesse;
  constructor(private camunda:CamundaService) { }

  ngOnInit() {

      //this.getFoods();
  }
   
    getFoods() {
      this.loading = true;
      this.camunda.getProcesses().subscribe((res:Response) => 
      { 
        this.prozesse = res.json();
        this.loading = false;
      },
        err => {
          console.error(err);
          this.loading=false;
        },
        () => console.log(this.prozesse)
      );
    }
  
  }


