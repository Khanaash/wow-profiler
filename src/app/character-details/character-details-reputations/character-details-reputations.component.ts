import { Component, OnInit } from '@angular/core';
import {Personnage} from "app/_shared/model/personnage";
import {PersonnageSharedService} from "app/_shared/services/personnage-shared.service";

@Component({
  selector: 'app-character-details-reputations',
  templateUrl: './character-details-reputations.component.html',
  styleUrls: ['./character-details-reputations.component.css']
})
export class CharacterDetailsReputationsComponent implements OnInit {
  public personnage: Personnage;

  constructor(private personnageSharedService: PersonnageSharedService) { }

  ngOnInit() {
    this.personnageSharedService.getPersonnage().subscribe(res => this.personnage = res);
  }

}
