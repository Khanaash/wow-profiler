import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Serveur }    from '../model/serveur';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {environment} from "environments/environment.prod";

@Injectable()
export class ServeurService {

  constructor(private http: Http) { }

  rechercherTous(): Observable<Serveur[]> {
    const results: Observable<Serveur[]> = this.http
      .get('https://eu.api.battle.net/wow/realm/status?locale=fr_FR&apikey=' + environment.apikey)
      .map(response => {
        return response.json().realms.map(jsonServeur => new Serveur().deserialize(jsonServeur));
      })
      .catch(error => {
        console.log(error);
        return Observable.of<Serveur[]>([]);
      });

    return results;
  }
}
