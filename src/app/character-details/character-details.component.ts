import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Personnage} from "app/_shared/model/personnage";
import {CharacterService} from "app/_shared/services/character.service";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  providers: []
})
export class CharacterDetailsComponent implements OnInit {
  public inNomServeur: string;
  public inNomPersonnage: string;
  public personnage: Personnage;
  public erreurApparue = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.personnage = this.route.snapshot.data['personnage'];
  }
}
