// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
// interfaces
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// rxjs
import { Observable , switchMap, } from 'rxjs';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.heroService.getHeroes();
      })
    );
    this.heroes$.subscribe(res=>this.heroes = res)
  }



  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {

    this.heroService.deleteHero(hero.id).subscribe(()=>{
      this.heroes = this.heroes.filter((h) => h !== hero);
    });
  }
}
