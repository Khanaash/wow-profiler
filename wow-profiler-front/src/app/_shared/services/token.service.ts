import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
	private identificationTokenBlizzardApi: string;

	constructor() { }

	public getIdentificationTokenBlizzardApi(): string {
		return this.identificationTokenBlizzardApi;
	}

	public setIdentificationTokenBlizzardApi(identificationTokenBlizzardApi: string): void {
		this.identificationTokenBlizzardApi = identificationTokenBlizzardApi;
	}
}
