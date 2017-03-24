import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details.component';
import {CharacterDetailsRouterModule} from "../../modules-router/character-details-router.module";
import { CharacterDetailsOverviewComponent } from './character-details-overview/character-details-overview.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterDetailsRouterModule
  ],
  declarations: [
    CharacterDetailsComponent,
    CharacterDetailsOverviewComponent
  ]
})
export class CharacterDetailsModule { }
