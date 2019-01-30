
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Serveur} from '../model/serveur';


import {environment} from "environments/environment";
import {TokenService} from "app/_shared/services/token.service";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable()
export class ServeurService {

	constructor(private http: HttpClient, private tokenService: TokenService) { }

	rechercherTous(): Observable<Serveur[]> {
		const results: Observable<Serveur[]> = this.http.get<any>(environment.baseUrlBlizzardAPI + '/wow/realm/status?locale=fr_FR&access_token=' + this.tokenService.getIdentificationTokenBlizzardApi()).pipe(
			map(response => {
				return response.realms.map(jsonServeur => new Serveur().deserialize(jsonServeur));
			}),
			catchError(error => {
				console.log(error);
				return of<Serveur[]>([]);
			})
		);

		return results;
	}
}
