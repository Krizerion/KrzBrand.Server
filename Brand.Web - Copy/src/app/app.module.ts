import { DetailsComponent } from './pages/details/details.component';
import { FormsModule } from '@angular/forms';
import { DashboardBrandComponent } from './pages/dashboard-brand/dashboard-brand.component';
import { GlobalDataService } from './services/global-data.service';
import { DashboardCountryComponent } from './pages/dashboard-country/dashboard-country.component';
import { ProductService } from './services/product-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { APP_INITIALIZER, forwardRef } from '@angular/core';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, DashboardComponent, DashboardCardComponent,
    DashboardCountryComponent, DashboardBrandComponent, DetailsComponent ],
  providers: [ ProductService, forwardRef(() => GlobalDataService), {
      provide: APP_INITIALIZER,
      useFactory: (globalDataService: GlobalDataService) => function() { return globalDataService.init() },
      deps: [GlobalDataService],
      multi: true
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
