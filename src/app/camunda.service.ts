import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*' })
};

@Injectable()
export class CamundaService {

  constructor(private http:HttpClient) { }

  getProcesses(){
    return this.http.get('http://192.168.99.100:8080/engine-rest/process-definition?latest=true&active=true');
  }

}
