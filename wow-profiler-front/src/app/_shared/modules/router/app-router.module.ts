import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from "app/page-not-found-component/page-not-found-component.component";
import { SearchCharacterComponent } from "app/search-character/search-character.component";

import * as GlobalConstants from 'global-consts';
import {AccessGuardGuard} from "../../guard/access-guard.guard";

const appRoutes: Routes = [
	{
		path: GlobalConstants.ROUTE_SEARCH_CHARACTER,
		component: SearchCharacterComponent,
		canActivate: [AccessGuardGuard],
		canActivateChild: [AccessGuardGuard]
	},
	{
		path: '',
		redirectTo: GlobalConstants.ROUTE_SEARCH_CHARACTER,
		pathMatch: 'full'
	},
	{
		path: '**',
		component: PageNotFoundComponentComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRouterModule { }
