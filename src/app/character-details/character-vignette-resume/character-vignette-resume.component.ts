import {Component, Input, OnInit} from '@angular/core';
import {PersonnageReminder} from "app/_shared/model/personnage-reminder";
import {environment} from "environments/environment";

@Component({
  selector: 'app-character-vignette-resume',
  templateUrl: './character-vignette-resume.component.html',
  styleUrls: ['./character-vignette-resume.component.css']
})
export class CharacterVignetteResumeComponent implements OnInit {
  @Input() personnage: PersonnageReminder;

  constructor() { }

  ngOnInit() {
  }

  get envVariableBaseUrlBlizzardRender(): string {
    return environment.baseUrlBlizzardRender;
  }
}
