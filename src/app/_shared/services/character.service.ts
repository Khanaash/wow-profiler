import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Personnage} from '../model/personnage';
import {Observable} from 'rxjs';
import {environment} from 'environments/environment';

@Injectable()
export class CharacterService {

  constructor(private http: Http) { }

  rechercherPersonnage(nomServeur: string, nomPersonnage: string): Observable<Personnage> {
    const results: Observable<Personnage> = this.http
      .get('https://eu.api.battle.net/wow/character/' + nomServeur + '/' + nomPersonnage
          + '?fields=guild%2C+items%2C+professions%2C+progression%2C+pvp%2C+stats%2C+talents%2C+titles&locale=fr_FR&apikey='
          + environment.apikey)
      .map(response =>  {
        const personnage = new Personnage().deserialize(response.json());
        if (!environment.production) {
          console.log(personnage);
        }
        return personnage;
      })
      .catch(error => {
        return Observable.throw(error); // observable needs to be returned or exception raised
      });

    return results;
  }
}
