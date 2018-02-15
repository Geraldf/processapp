import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { AppSettingService } from './app-setting.service';
import { AppSetting } from './app-setting';


const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT'
  })
};

const camundaip = 'http://192.168.99.100:8080/engine-rest/';
const camundaip_processes = 'process-definition?latest=true&active=true';

@Injectable()
export class CamundaService implements OnInit {

  product: any;
  settings: AppSetting;
  constructor(private _http: HttpClient, private appSettingsService: AppSettingService) { }

  // getProcesses(){
  //   //return this.http.get('http://192.168.99.100:8080/engine-rest/process-definition?latest=true&active=true');
  // }

  ngOnInit(): void {
    this.appSettingsService.getSettings()
      .subscribe(settings => this.settings = settings,
        () => null,
        () => {

          this.product.url = this.settings.camundaURL;
        });
  }
  handleError(arg0: any): any {
    throw new Error('Method not implemented.');
  }

  getProcesses() {

    let remote = camundaip+camundaip_processes;
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');



    return this._http.get(remote,{
            headers: headers,
		        responseType: 'json'
    });
      }

}
