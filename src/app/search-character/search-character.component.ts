import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Serveur} from 'app/_shared/model/serveur';
import {ServeurService} from 'app/_shared/services/serveur.service';
import {EnumPaysServeurUtils, EnumPaysServeur} from './enum-pays-serveur';

import * as GlobalConstants from 'global-consts';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css'],
  providers: []
})
export class SearchCharacterComponent implements OnInit {
  public serveurs: Serveur[];
  public paysServeurs : PaysServeur[];
  public nomPersonnage: string;
  public selectedServeur : Serveur;

  constructor(
    private router: Router,
    private serveurService: ServeurService) {
  }

  ngOnInit(): void {
    this.serveurService.rechercherTous().subscribe(
      response => {
        this.serveurs = response;
        this.buildPaysServeur();
      }
    );
  }


  private buildPaysServeur(): void {
    const paysServeurs: PaysServeur[] = [];
    for (const serveur of this.serveurs) {
      const locale: string = serveur.locale;
      const valueEnum: EnumPaysServeur = EnumPaysServeurUtils.getValueEnum(locale);
      if (valueEnum != null) {
        // Pays present dans enum
        if (!paysServeurs.find(object => object.locale.find(subObj => subObj === locale) != undefined)) {
          const paysServeur: PaysServeur = new PaysServeur(locale, EnumPaysServeurUtils.getPaysAffichage(valueEnum));
          paysServeurs.push(paysServeur);
        }
      } else {
        // Pays autre
        const paysServeurAutre = paysServeurs.find(object => object.libelleAffichage === 'Autres');
        if (!paysServeurAutre) {
          const paysServeur: PaysServeur = new PaysServeur(locale, 'Autres');
          paysServeurs.push(paysServeur);
        } else {
          paysServeurAutre.locale.push(locale);
        }
      }
    }

    this.paysServeurs = paysServeurs.sort(function(o1, o2) {
      if (o1.libelleAffichage === 'Autres') {
        return 1; // Autres en bas
      } else {
        return o1.libelleAffichage.localeCompare(o2.libelleAffichage);
      }
    });
  }

  public getServeursParPays(paysServeur: PaysServeur) : Serveur[] {
    const serveurs: Serveur[] = [];
    for (const serveur of this.serveurs) {
      if (paysServeur.locale.find(obj => obj === serveur.locale)) {
        serveurs.push(serveur);
      }
    }
    return serveurs;
  }

  public rechercher(): void {
    this.router.navigate([GlobalConstants.ROUTE_CHARACTER_DETAILS, this.selectedServeur.nom, this.nomPersonnage]);
  }
}

class PaysServeur {
  locale: string[] = [];
  libelleAffichage: string;

  constructor(locale: string, libelleAffichage: string) {
    this.locale.push(locale);
    this.libelleAffichage = libelleAffichage;
  }
}
