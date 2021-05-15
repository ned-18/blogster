import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { WorldComponent } from './world/world.component';
import { SportComponent } from './sport/sport.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: 'travel', component: TravelComponent },
  { path: 'world', component: WorldComponent },
  { path: 'sport', component: SportComponent },
  { path: 'music', component: MusicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
