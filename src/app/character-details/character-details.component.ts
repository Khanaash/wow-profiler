import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Personnage} from "app/_shared/model/personnage";
import {environment} from "environments/environment";

import * as $ from 'jquery';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  providers: []
})
export class CharacterDetailsComponent implements OnInit {
  public personnage: Personnage;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.personnage = this.route.snapshot.data['personnage'];
    document.body.classList.add('character-render');
    $('body').css('background-image',
                  `url(${environment.baseUrlBlizzardRender}/character/${this.route.snapshot.params['serverName'].toLowerCase()}/${this.personnage.getIdentifiantRenderImages()}-main.jpg)`);
    $(document).ready(() => {
      $(".h-separator").css('background', this.personnage.classeInfos.colorCss);
      $(".border-bottom-with-class-color").css("border-color", this.personnage.classeInfos.colorCss);
      $(".with-class-color").css("color", this.personnage.classeInfos.colorCss);
    } );
  }
}
