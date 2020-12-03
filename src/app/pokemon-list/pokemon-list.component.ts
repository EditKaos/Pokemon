import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
pokemons:any[]=[]
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach(result => {
          this.dataService.getMoreData(result.name)
          .subscribe((responsePok:any)=>{
            this.pokemons.push(responsePok)
/*             console.log(this.pokemons)
 */           
            
            
          });
        });
  });
}

AgregaPokemon(pokemon) {
  this.dataService.addPokemon(pokemon);
}


}
