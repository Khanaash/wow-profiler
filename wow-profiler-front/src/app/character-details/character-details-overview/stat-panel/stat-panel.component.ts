import {Component, Input, OnInit} from '@angular/core';
import {Personnage} from "app/_shared/model/personnage";
import {StatistiqueDisplayer} from "app/_shared/model/statistique-displayer";

@Component({
  selector: 'app-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrls: ['./stat-panel.component.css']
})
export class StatPanelComponent implements OnInit {
  @Input() personnage: Personnage;

  public afficherPourcentage: boolean;
  public mainStatistique: StatistiqueDisplayer;

  constructor() {
  }

  ngOnInit() {
    this.mainStatistique = this.personnage.getMainStatistique();
    this.afficherPourcentage = true;
  }

}
