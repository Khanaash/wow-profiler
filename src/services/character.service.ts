import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Personnage} from "../model/personnage";
import {Serveur} from "../model/serveur";
import {Observable} from "rxjs";
import {environment} from "../environments/environment.prod";

@Injectable()
export class CharacterService {

  constructor(private http: Http) { }

  rechercherPersonnage(nomServeur: string, nomPersonnage: string): Observable<Personnage> {
    let results: Observable<Personnage> = this.http
      .get('https://eu.api.battle.net/wow/character/' + nomServeur + '/' + nomPersonnage + '?locale=en_GB&apikey=' + environment.apikey)
      .map(response => response.json() as Personnage)
      .catch(error => {
        return Observable.throw(error); // observable needs to be returned or exception raised
      });

    return results;
  }
}
