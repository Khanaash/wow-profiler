import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "app/app.component";
import {SearchCharacterComponent} from "app/search-character/search-character.component";
import {PageNotFoundComponentComponent} from "app/page-not-found-component/page-not-found-component.component";

import {AppRouterModule} from "app/_shared/modules/router/app-router.module";
import {CharacterDetailsModule} from "app/character-details/character-details.module";
import {CharacterService} from "app/_shared/services/character.service";
import {ServeurService} from "app/_shared/services/serveur.service";
import {PersonnageResolver} from "app/character-details/personnage-resolver.service";
import {PersonnageHistoriqueService} from "app/_shared/services/personnage-historique.service";
import {CharacterVignetteResumeComponent} from "app/character-details/character-vignette-resume/character-vignette-resume.component";
import {AccessGuardGuard} from "app/_shared/guard/access-guard.guard";
import {TokenService} from "app/_shared/services/token.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		SearchCharacterComponent,
		PageNotFoundComponentComponent,
		CharacterVignetteResumeComponent
	],
	imports: [
		// generic modules
		BrowserModule,
		FormsModule,
		HttpClientModule,
		// custom modules
		CharacterDetailsModule,
		AppRouterModule
	],
	providers: [
		CharacterService,
		ServeurService,
		PersonnageHistoriqueService,
		PersonnageResolver,
		AccessGuardGuard,
		TokenService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
