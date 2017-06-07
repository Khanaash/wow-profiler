import {Component, OnInit} from "@angular/core";
import {Personnage} from "app/_shared/model/personnage";
import {Params} from "@angular/router";
import {PersonnageSharedService} from "app/_shared/services/personnage-shared.service";

@Component({
  selector: 'app-character-details-overview',
  templateUrl: './character-details-overview.component.html',
  styleUrls: ['./character-details-overview.component.css']
})
export class CharacterDetailsOverviewComponent implements OnInit {
  public personnage: Personnage;

  constructor(private personnageSharedService: PersonnageSharedService) { }

  ngOnInit() {
    this.personnageSharedService.getPersonnage().subscribe(res => this.personnage = res);
  }

}
