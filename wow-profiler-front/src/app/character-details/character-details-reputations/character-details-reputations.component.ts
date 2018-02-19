import { Component, OnInit } from '@angular/core';
import {Personnage} from "app/_shared/model/personnage";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-character-details-reputations',
  templateUrl: './character-details-reputations.component.html',
  styleUrls: ['./character-details-reputations.component.css']
})
export class CharacterDetailsReputationsComponent implements OnInit {
  public personnage: Personnage;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.personnage = this.route.snapshot.data['personnage'];
  }

}
