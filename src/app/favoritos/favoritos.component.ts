import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService, } from '../service/data.service';
import { Pokemon } from '../types'


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})

export class FavoritosComponent implements OnInit {
  constructor(private dataService: DataService) { }
  pokemonsFav: any[] = [];


  ngOnInit() {
    this.pokemonsFav = this.dataService.PokemonsFa();
  }

  /* PokemonsFa() {
    var favoritos = JSON.parse(localStorage.getItem('Favoritos') || "[]");
    for (let i = 0; i <= favoritos.length; i++) {
      this.dataService.getMoreData(favoritos[i])
        .subscribe((responsePok: any) => {
          this.pokemonsFav.push(responsePok)

        });
    }
  } */

  /*   PokemonsFa() {
      if (localStorage.getItem('Favoritos') === null) {
        this.pokemonsFav = [];
      } else {
        var favoritos = JSON.parse(localStorage.getItem('Favoritos') || "[]");
        for (let i = 0; i <= favoritos.length; i++) {
          this.dataService.getMoreData(favoritos[i])
            .subscribe((responsePok: any) => {
              this.pokemonsFav.push(responsePok)
  
            });
        }
      }
      return this.pokemonsFav;
    } */


  /*    quitarFav(favoritos) {
      var Favoritos = JSON.parse(localStorage.getItem('Favoritos') || "[]");
      Favoritos.splice(Favoritos.indexOf(favoritos.name), 1);
      localStorage.setItem('Favoritos', JSON.stringify(Favoritos));
      localStorage.Favoritos = JSON.stringify(Favoritos);
      this.pokemonsFav.push(Favoritos);
      this.PokemonsFa();
    }  */

  quitarFav(favoritos) {
    for (let i = 0; i < this.pokemonsFav.length; i++) {
      if (favoritos == this.pokemonsFav[i]) {
        this.pokemonsFav.splice(i, 1);
        localStorage.setItem('Favoritos', JSON.stringify(this.pokemonsFav));
      }
    }
  }






}