import {Component, Input, OnInit} from '@angular/core';
import {Personnage} from "../../_shared/model/personnage";

@Component({
  selector: 'app-entete-titre',
  templateUrl: './entete-titre.component.html',
  styleUrls: ['./entete-titre.component.css']
})
export class EnteteTitreComponent implements OnInit {
  @Input('titre') titre: string;
  @Input('cssColor') cssColor: String;

  constructor() { }

  ngOnInit() {
  }

}
