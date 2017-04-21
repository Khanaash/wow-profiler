import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Personnage} from 'app/_shared/model/personnage';
import {CharacterService} from 'app/_shared/services/character.service';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  providers: [CharacterService]
})
export class CharacterDetailsComponent implements OnInit {
  public inNomServeur: string;
  public inNomPersonnage: string;
  public personnage: Personnage;
  public erreurApparue = false;
  public loading = true;

  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.inNomServeur = params['serverName'];
        this.inNomPersonnage = params['characterName'];
        return this.characterService.rechercherPersonnage(this.inNomServeur, this.inNomPersonnage);
      })
      .take(1)
      .subscribe(
        (data) => this.personnage = data,
        (err) => {
          this.erreurApparue = true;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }

  get envVariableBaseUrlBlizzardRender(): string {
    return environment.baseUrlBlizzardRender;
  }
}
