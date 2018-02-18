import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import * as bpmn from '../../../node_modules/bpmn-js/lib/NavigatedViewer.js';



@Component({
  selector: 'app-bpmn',
  templateUrl: './bpmnviewer.component.html',
  styleUrls: ['./bpmnviewer.component.css']
})
export class BpmnviewerComponent implements OnInit {

  viewer: any;
    title: String = 'Angular 2 with BPMN-JS';

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.viewer = new bpmn({container: '#canvas'});
        this.loadSampleBPMN();
    }

    handleError(err: any) {
        if (err) {
            console.log('error rendering', err);
        } else {
            console.log('rendered');
        }
    }

    loadSampleBPMN() {
        const url = '../../assets/mitarbeiterBestimmen.bpmn';
        this.http.get(url)
            .toPromise()
            .then(response => response.text())
            .then(data => this.viewer.importXML(data, this.handleError))
            .catch(this.handleError);
}
}
