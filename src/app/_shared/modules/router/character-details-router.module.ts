import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterDetailsComponent} from "app/character-details/character-details.component";

import * as GlobalConstants from 'global-consts';
import {CharacterDetailsOverviewComponent} from "app/character-details/character-details-overview/character-details-overview.component";
import {CharacterDetailsReputationsComponent} from "app/character-details/character-details-reputations/character-details-reputations.component";

const characterDetailRoutes: Routes = [
  { path: GlobalConstants.ROUTE_CHARACTER_DETAILS + '/:serverName/:characterName',
    component: CharacterDetailsComponent,
    children: [
      {
        path: '',
        component: CharacterDetailsOverviewComponent
      },
      {
        path: 'reputations',
        component: CharacterDetailsReputationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(characterDetailRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CharacterDetailsRouterModule { }
