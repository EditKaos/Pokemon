import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  pokeAPI: string;
  pokemons: any[] = []

  constructor(
    private http: HttpClient
  ) {



    this.pokeAPI = environment.pokemonURL;
  }

  getPokemons() {
    return this.http.get(`${this.pokeAPI}`);
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  }





  AgregaPokemon2(pokemon) {
    let pokemons = [];
    pokemons.push(pokemon);
    this.getMoreData(pokemon).subscribe((responsePok: any) => {
      this.pokemons.push(responsePok);
    });
    if (localStorage.getItem('Favoritos') === null) {
      pokemons.push(pokemon);
      localStorage.setItem('Favoritos', JSON.stringify(pokemons));
    } else {
      pokemons = JSON.parse(localStorage.getItem('Favoritos'));
      pokemons.push(pokemon);
      localStorage.setItem('Favoritos', JSON.stringify(pokemons));
    }
  }
  PokemonsFa() {
    if (localStorage.getItem('Favoritos') !== null) {
      let favoritos = JSON.parse(localStorage.getItem('Favoritos') || "[]");
      for (let i = 0; i <= favoritos.length; i++) {

        this.getMoreData(favoritos[i])
          .subscribe((responsePok: any) => {
            this.pokemons.push(responsePok)
          });
      }
    } else {

    }
    return this.pokemons;
  }







}
