import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Page404Component } from './page404/page404.component';
import { ProcessesComponent } from './processes/processes.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Page404Component,
    ProcessesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
