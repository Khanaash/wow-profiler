import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {Personnage} from "app/_shared/model/personnage";
import {CharacterService} from "app/_shared/services/character.service";
import * as GlobalConstants from "global-consts";

@Injectable()
export class PersonnageResolver implements Resolve<Personnage> {

  constructor(private characterService: CharacterService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Personnage> {
    return this.characterService.rechercherPersonnage(route.params['serverName'], route.params['characterName']).toPromise()
      .catch(err => {
        alert("todo notification bad character");
            this.router.navigate([GlobalConstants.ROUTE_SEARCH_CHARACTER]);
      });
  }
}
