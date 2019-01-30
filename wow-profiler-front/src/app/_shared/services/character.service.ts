import {Injectable} from '@angular/core';
import {Personnage} from '../model/personnage';
import {environment} from 'environments/environment';
import {TokenService} from "app/_shared/services/token.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable()
export class CharacterService {

	constructor(private http: HttpClient, private tokenService: TokenService) { }

	rechercherPersonnage(nomServeur: string, nomPersonnage: string): Observable<Personnage> {
		const results: Observable<Personnage> = this.http.get<any>(
			environment.baseUrlBlizzardAPI + '/wow/character/' + nomServeur + '/' + nomPersonnage + '?fields=guild%2C+items%2C+professions%2C+progression%2C+pvp%2C+stats%2C+talents%2C+titles&locale=fr_FR&access_token=' + this.tokenService.getIdentificationTokenBlizzardApi()
		).pipe(
			map(response =>  {
				const personnage = new Personnage().deserialize(response);
				if (!environment.production) {
					console.log(personnage);
				}
				return personnage;
			}),
			catchError(error => {
				console.log(error);
				return throwError(error); // observable needs to be returned or exception raised
			})
		);

		return results;
	}
}
