import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppSetting } from './app-setting'


@Injectable()
export class AppSettingService {


  constructor(private http: Http) {
  }
  getSettings(): Observable<AppSetting> {   
    return this.http.get(this.getdata())
      .map(this.extractData)
      .catch(this.handleErrors);
  }
  private getdata(): string {
    return "/src/app/assets/appsettings.json";
  }

  private extractData(res: Response) {
    let body = res.json();
    
    return body || {};
  }
  private handleErrors(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }

}
