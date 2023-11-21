import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HeroService } from '../hero.service';

import {Hero} from '../hero';
import { MessageService } from '../message.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
  ],
})

export class HeroesComponent {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id:${hero.id}, name:${hero.name} `);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}