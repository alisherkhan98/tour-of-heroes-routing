import { Component, OnInit } from '@angular/core';
// interfaces
import { Hero } from '../hero';
// routing
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// services
import { HeroService } from '../hero.service';
// rxjs
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  hero$?: Observable<Hero>;
  hero: Hero | undefined = undefined
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHero(Number(params.get('id')!)))
    );
    this.hero$.subscribe((hero)=>{
      this.hero = hero
    })
  }


  goToHeroes(hero:Hero | undefined) {
    const heroId = hero ? hero.id : null;

    this.router.navigate(['/superheroes', { id: heroId}]);  }

  save() {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goToHeroes(this.hero));
    }
  }
}
