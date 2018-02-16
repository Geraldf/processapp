import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Page404Component } from './page404/page404.component';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { HttpModule } from '@angular/http';
import { ProcessesComponent } from './processes/processes.component';
import { CamundaService } from './camunda.service';
import { AppSetting } from './app-setting';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Page404Component,
    ProcessesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [CamundaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
