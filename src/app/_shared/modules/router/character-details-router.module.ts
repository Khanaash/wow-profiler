import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterDetailsComponent} from "app/character-details/character-details.component";

import * as GlobalConstants from 'global-consts';

const characterDetailRoutes: Routes = [
  { path: GlobalConstants.ROUTE_CHARACTER_DETAILS + '/:serverName/:characterName',
    component: CharacterDetailsComponent

    // children: [
    //   {
    //     path: 'overview',
    //     component: CharacterDetailsOverviewComponent
    //   }
    // ]
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
