import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TrialComponent } from './trial/trial.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about/:id', component:AboutComponent},
  {path: 'trial', component:TrialComponent},
  {path: 'citynews/:name', component:CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
