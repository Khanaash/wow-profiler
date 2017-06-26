import {Component, OnInit} from "@angular/core";
import {Personnage} from "app/_shared/model/personnage";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-character-details-overview',
  templateUrl: './character-details-overview.component.html',
  styleUrls: ['./character-details-overview.component.css']
})
export class CharacterDetailsOverviewComponent implements OnInit {
  public personnage: Personnage;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.personnage = this.route.snapshot.data['personnage'];
  }

}
