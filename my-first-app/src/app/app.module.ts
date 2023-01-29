import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server/server.component';
import { SuccessAlertComponent } from './assignments/alerts/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignments/alerts/warning-alert/warning-alert.component';
import { ServersComponent } from './servers/servers.component';
import { Assignment2Component } from './assignments/assignment2/assignment2.component';
import { Assignment3DirectivesComponent } from './assignments/assignment3-directives/assignment3-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    Assignment2Component,
    Assignment3DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
