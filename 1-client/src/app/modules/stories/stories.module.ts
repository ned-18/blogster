import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { StoriesRoutingModule } from './stories-routing.module';
import { TravelComponent } from './travel/travel.component';
import { WorldComponent } from './world/world.component';
import { SportComponent } from './sport/sport.component';
import { MusicComponent } from './music/music.component';


@NgModule({
  declarations: [TravelComponent, WorldComponent, SportComponent, MusicComponent],
  imports: [
    CommonModule,
    StoriesRoutingModule,
    SharedModule
  ]
})
export class StoriesModule { }
