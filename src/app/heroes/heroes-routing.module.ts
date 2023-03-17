import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const heroesRoutes: Routes = [

  {path:"heroes", redirectTo:"superheroes"},
  {path:"hero/:id", redirectTo:"superhero/:id"},
  {path:"superheroes", component:HeroListComponent, data: {animation:"heroes"}},
  {path:"superhero/:id", component:HeroDetailsComponent, data: {animation:"hero"}},
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
