import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'stats', component: StatsComponent },
  { path:'info', component: InfoComponent},
  { path:'**', component:MapComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
