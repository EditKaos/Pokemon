import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Pokemon } from '../types';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = []
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach(result => {
          this.dataService.getMoreData(result.name)
            .subscribe((responsePok: any) => {
              this.pokemons.push(responsePok)
            });
        });
      });
  }
  /*  AgregaPokemon(pokemon) {
    this.dataService.addPokemon(pokemon)
  }  */

  /*  AgregaPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
    let pokemons = [];
    if(localStorage.getItem('Favoritos') === null) {
      pokemons = [];
      pokemons.push(pokemon);
      localStorage.setItem('Favoritos', JSON.stringify(pokemons));
    } else {
      pokemons = JSON.parse(localStorage.getItem('Favoritos'));
      pokemons.push(pokemon); 
      localStorage.setItem('Favoritos', JSON.stringify(pokemons));
    }
  }  */



  AgregaPokemon(pokemon: Pokemon) {
    console.log(pokemon);
    this.dataService.AgregaPokemon2(pokemon);
  }








}





