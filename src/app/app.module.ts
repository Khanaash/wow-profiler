import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "app/app.component";
import {SearchCharacterComponent} from "app/search-character/search-character.component";
import {PageNotFoundComponentComponent} from "app/page-not-found-component/page-not-found-component.component";

import {AppRouterModule} from "app/_shared/modules/router/app-router.module";
import {CharacterDetailsModule} from "app/character-details/character-details.module";
import {CharacterService} from "app/_shared/services/character.service";
import {ServeurService} from "app/_shared/services/serveur.service";
import {PersonnageSharedService} from "app/_shared/services/personnage-shared.service";
import {TooltipModule} from "ngx-bootstrap/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    SearchCharacterComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    // generic modules
    BrowserModule,
    FormsModule,
    HttpModule,
    // custom modules
    CharacterDetailsModule,
    AppRouterModule
  ],
  providers: [
    CharacterService,
    ServeurService,
    PersonnageSharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
