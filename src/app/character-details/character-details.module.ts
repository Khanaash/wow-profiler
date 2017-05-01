import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details.component';
import {CharacterDetailsRouterModule} from "app/_shared/modules/router/character-details-router.module";
import {ItemComponent} from "../item/item.component";
import {EnteteTitreComponent} from "../utils/entete-titre/entete-titre.component";

@NgModule({
  imports: [
    CommonModule,
    CharacterDetailsRouterModule
  ],
  declarations: [
    CharacterDetailsComponent,
    ItemComponent,
    EnteteTitreComponent
  ]
})
export class CharacterDetailsModule { }
