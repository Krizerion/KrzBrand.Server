import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DashboardComponent, DashboardCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
