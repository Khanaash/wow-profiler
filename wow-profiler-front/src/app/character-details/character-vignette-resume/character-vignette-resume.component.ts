import {Component, Input, OnInit} from '@angular/core';
import {PersonnageReminder} from "app/_shared/model/personnage-reminder";
import {environment} from "environments/environment";
import {Router} from "@angular/router";
import * as GlobalConstants from 'global-consts';

@Component({
  selector: 'app-character-vignette-resume',
  templateUrl: './character-vignette-resume.component.html',
  styleUrls: ['./character-vignette-resume.component.css']
})
export class CharacterVignetteResumeComponent implements OnInit {
  @Input() personnage: PersonnageReminder;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  get envVariableBaseUrlBlizzardRender(): string {
    return environment.baseUrlBlizzardRender;
  }

  public accederDetailPersonnage(personnage: PersonnageReminder): void {
    this.router.navigate([GlobalConstants.ROUTE_CHARACTER_DETAILS, personnage.serveur, personnage.nom]);
  }
}
