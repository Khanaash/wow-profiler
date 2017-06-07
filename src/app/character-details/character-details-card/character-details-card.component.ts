import {Component, Input, OnInit} from '@angular/core';
import {Personnage} from "app/_shared/model/personnage";
import {environment} from "environments/environment";

@Component({
  selector: 'app-character-details-card',
  templateUrl: './character-details-card.component.html',
  styleUrls: ['./character-details-card.component.css']
})
export class CharacterDetailsCardComponent implements OnInit {
  @Input() personnage: Personnage;

  constructor() { }

  ngOnInit() {
  }

  get envVariableBaseUrlBlizzardRender(): string {
    return environment.baseUrlBlizzardRender;
  }
}
