import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {Personnage} from "app/_shared/model/personnage";
import {CharacterService} from "app/_shared/services/character.service";
import * as GlobalConstants from "global-consts";
import {PersonnageHistoriqueService} from "app/_shared/services/personnage-historique.service";
import {catchError, tap} from "rxjs/operators";
import {Observable, throwError} from "rxjs";

@Injectable()
export class PersonnageResolver implements Resolve<Personnage> {

	constructor(private characterService: CharacterService, private router: Router,
				private personnageHistoriqueService: PersonnageHistoriqueService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Personnage> {
		return this.characterService.rechercherPersonnage(route.params['serverName'], route.params['characterName']).pipe(
			tap(personnage => this.personnageHistoriqueService.ajouterPersonnageDansHistorique(personnage)),
			catchError(error => {
				alert("todo notification bad character");
				this.router.navigate([GlobalConstants.ROUTE_SEARCH_CHARACTER]);
				return throwError(error);
			})
		);
	}
}
