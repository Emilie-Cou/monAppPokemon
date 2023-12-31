import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  urlPoke : string = "https://pokeapi.co/api/v2/pokemon/";
  urlPokeSpecies : string = "https://pokeapi.co/api/v2/pokemon-species/";

  constructor(private _nomHttpClient : HttpClient) { }

  formIdValid! : number;
  formNomValid! : string;

  getById (idPoke : number) : Observable<any> {
    return this._nomHttpClient.get<any>(this.urlPoke + idPoke)
  }
  
  getByNom (nomPoke : string) : Observable<any> {
    return this._nomHttpClient.get<any>(this.urlPoke + nomPoke)
  }

  getSpeciesById ( idPoke : number) : Observable<any> {
    return this._nomHttpClient.get<any>(this.urlPokeSpecies + idPoke)
  }
}
