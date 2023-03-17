import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { Crisis } from './crisis-center/crisis';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    const crises: Crisis[] = [
      { id: 1, name: 'Dragon Burning Cities' },
      { id: 2, name: 'Sky Rains Great White Sharks' },
      { id: 3, name: 'Giant Asteroid Heading For Earth' },
      { id: 4, name: 'Procrastinators Meeting Delayed Again' },
    ];
    return { heroes , crises};
  }

  genId(items: Hero[]|Crisis[]): number {
    return items.length > 0
      ? Math.max(...items.map((item) => item.id)) + 1
      : 11;
  }

}
