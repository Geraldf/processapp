import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT'
  })
};

const camundaip = 'http://192.168.99.100:8080/engine-rest/';
const camundaip_processes = 'process-definition?latest=true&active=true'

@Injectable()
export class CamundaService{

  
  product: any;
 
  constructor(private _http:HttpClient) { 

  }

  // getProcesses(){
  //   //return this.http.get('http://192.168.99.100:8080/engine-rest/process-definition?latest=true&active=true');
  // }

  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  getProcesses(){

  
    
    let remote = environment.camundaURL+camundaip_processes;
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT');


   
    return this._http.get(remote,{
            headers: headers,
		        responseType: 'json'
    });
      }

}