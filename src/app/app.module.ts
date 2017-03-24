import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchCharacterComponent} from "./search-character/search-character.component";
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { AppRouterModule } from '../modules-router/app-router.module';
import {CharacterDetailsModule} from "./character-details/character-details.module";

@NgModule({
  declarations: [
    AppComponent,
    SearchCharacterComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    // generic modules-router
    BrowserModule,
    FormsModule,
    HttpModule,
    // custom modules-router
    CharacterDetailsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
