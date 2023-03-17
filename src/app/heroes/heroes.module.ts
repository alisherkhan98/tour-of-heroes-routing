import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
  declarations: [HeroListComponent, HeroDetailsComponent],
  imports: [CommonModule, HeroesRoutingModule, FormsModule],
})
export class HeroesModule {}
