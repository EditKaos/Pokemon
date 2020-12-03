import { Component, OnInit } from '@angular/core';
import { DataService, } from '../service/data.service';
let existingCartItems = JSON.parse(localStorage.getItem('Favoritos'));
if (!existingCartItems) {
  existingCartItems = [];

}

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})

export class FavoritosComponent implements OnInit {

  constructor(

    private dataService: DataService
  ) { }
  PokemonFavorito: Array<any> = JSON.parse(localStorage.getItem('Favoritos'));

  ngOnInit(): void {

  }
}