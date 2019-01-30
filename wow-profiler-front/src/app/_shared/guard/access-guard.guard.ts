import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {TokenService} from "../services/token.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from 'rxjs';

@Injectable()
export class AccessGuardGuard implements CanActivate, CanActivateChild {

	constructor(private http: HttpClient, private tokenService: TokenService) {
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		const myParams = new URLSearchParams();
		myParams.set('grant_type', 'client_credentials');
		myParams.set('client_id', 'f288d76efbc242de9711c6baef2348bb');
		myParams.set('client_secret', 'taOnD4aVYBMamGiPSlJDEymc4ANJ9Vo8');

		return this.http.get<any>("https://us.battle.net/oauth/token", {
			params: {
				'grant_type': 'client_credentials',
				'client_id': 'f288d76efbc242de9711c6baef2348bb',
				'client_secret': 'taOnD4aVYBMamGiPSlJDEymc4ANJ9Vo8'
			}
		}).pipe(
			map(response => {
				this.tokenService.setIdentificationTokenBlizzardApi(response.access_token);
				return true;
			})
		);
	}

	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(childRoute, state);
	}
}
