import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Personnage} from "app/_shared/model/personnage";
import {CharacterService} from "app/_shared/services/character.service";
import {PersonnageSharedService} from "app/_shared/services/personnage-shared.service";

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
  public loading = true;

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private personnageSharedService: PersonnageSharedService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.inNomServeur = params['serverName'];
        this.inNomPersonnage = params['characterName'];
        return this.characterService.rechercherPersonnage(this.inNomServeur, this.inNomPersonnage);
      })
      .take(1)
      .subscribe(
        (data) => {
          this.personnage = data;
          this.personnageSharedService.pushPersonnage(this.personnage);
        },
        (err) => {
          this.erreurApparue = true;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }
}
