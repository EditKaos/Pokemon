import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Pokemon } from '../types'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokeAPI: string;
  constructor(
    private http: HttpClient
  ) {
    let pokemonDataExite = JSON.parse(localStorage.getItem('Favoritos'));
    if (!pokemonDataExite) {
      pokemonDataExite = [];
    }
    this.itemsSubject.next(pokemonDataExite);

    this.pokeAPI = environment.pokemonURL;
  }

  getPokemons() {
    return this.http.get(`${this.pokeAPI}?limit=10`);
  }
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  }
  private itemsSubject = new BehaviorSubject<Pokemon[]>([]);
  items$ = this.itemsSubject.asObservable();

  addPokemon(pokemon: Pokemon) {
    this.items$.pipe(
      take(1),
      map((pokemons) => {
        pokemons.push(pokemon);
        localStorage.setItem('Favoritos', JSON.stringify(pokemons));
      }),
    ).subscribe();
  }



}
