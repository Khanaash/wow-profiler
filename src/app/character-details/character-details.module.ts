import {NgModule} from '@angular/core';
import {CharacterDetailsRouterModule} from "app/_shared/modules/router/character-details-router.module";
import {CharacterDetailsComponent} from "app/character-details/character-details.component";
import {ItemComponent} from "app/character-details/item/item.component";
import {EnteteTitreComponent} from "app/utils/entete-titre/entete-titre.component";
import {CharacterDetailsOverviewComponent} from "app/character-details/character-details-overview/character-details-overview.component";
import {CharacterDetailsCardComponent} from "app/character-details/character-details-card/character-details-card.component";
import {CharacterDetailsReputationsComponent} from "app/character-details/character-details-reputations/character-details-reputations.component";
import {ComponentUtilsModule} from "app/_shared/modules/component-utils.module";
import {StatPanelComponent} from "app/character-details/character-details-overview/stat-panel/stat-panel.component";
import { StatComponent } from './character-details-overview/stat-panel/stat.component';

@NgModule({
  imports: [
    ComponentUtilsModule,
    CharacterDetailsRouterModule
  ],
  declarations: [
    CharacterDetailsComponent,
    ItemComponent,
    EnteteTitreComponent,
    CharacterDetailsOverviewComponent,
    CharacterDetailsCardComponent,
    CharacterDetailsReputationsComponent,
    StatPanelComponent,
    StatComponent
  ]
})
export class CharacterDetailsModule { }
