
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService, } from '../service/data.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})

export class FavoritosComponent implements OnInit {
  constructor(private dataService: DataService) { }
  pokemonsFav = [];

  ngOnInit() {
    this.pokemonsFav = this.dataService.PokemonsFa();
  }
  ngDoCheck(): void {
    
  }
  
 

  quitarFav(favoritos) {
    var Favoritos = JSON.parse(localStorage.getItem('Favoritos') || "[]")
    for (let i = 0; i < this.pokemonsFav.length; i++) {
      if (favoritos == this.pokemonsFav[i]) {
        Favoritos.splice(Favoritos.indexOf(favoritos.name), 1);
        this.pokemonsFav.splice(i, 1);
        localStorage.setItem('Favoritos', JSON.stringify(Favoritos));


      }
    }
  }






}