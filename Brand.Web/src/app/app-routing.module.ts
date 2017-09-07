import { DetailsComponent } from './pages/details/details.component';
import { DashboardBrandComponent } from './pages/dashboard-brand/dashboard-brand.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCountryComponent } from './pages/dashboard-country/dashboard-country.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'dashboard/:country',  component: DashboardCountryComponent },
  { path: 'dashboard/:country/:brand',  component: DashboardBrandComponent },
  { path: 'dashboard/:country/:brand/:type',  component: DetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
