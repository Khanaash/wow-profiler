import { Injectable } from '@angular/core';
import {Personnage} from "app/_shared/model/personnage";
import {LocalstorageConstants} from "app/localstorage-constants";
import {PersonnageReminder} from "app/_shared/model/personnage-reminder";
import {plainToClass} from "class-transformer";

/**
 * Service permettant de stocker et de retrouver jusqu'à 10 personnages consultés récemment.
 * Le stockage se fait dans le navigateur, via le localStorage.
 */
@Injectable()
export class PersonnageHistoriqueService {

  constructor() { }

  public ajouterPersonnageDansHistorique(personnage: Personnage): void {
    let historiquePersonnagesConsultes = this.recupererHistoriqueDesPersonnages();
    if (historiquePersonnagesConsultes == null) {
      historiquePersonnagesConsultes = [];
    }

    // Recherche du personnage dans l'historique par nom et serveur. Cela semble etre les 2 éléments de la clé unique d'un personnage.
    const personnageDejaExistantDansHistorique = historiquePersonnagesConsultes.find(personnageHistorique => {
      return personnageHistorique.nom === personnage.nom && personnageHistorique.serveur === personnage.serveur;
    });
    if (personnageDejaExistantDansHistorique != null) {
      // On supprime le personnage de l'historique. Il sera rajouté ensuite.
      const indexToRemove = historiquePersonnagesConsultes.indexOf(personnageDejaExistantDansHistorique, 0);
      historiquePersonnagesConsultes.splice(indexToRemove, 1);
    }

    if (historiquePersonnagesConsultes.length > 9) {
      historiquePersonnagesConsultes = historiquePersonnagesConsultes.slice(historiquePersonnagesConsultes.length - 9, historiquePersonnagesConsultes.length);
    }

    historiquePersonnagesConsultes.push(new PersonnageReminder(personnage.nom, personnage.niveau, personnage.serveur,
      personnage.getClasseLibelle(), personnage.imagePortrait));
    localStorage.setItem(LocalstorageConstants.PERSONNAGES_HISTORIQUE, JSON.stringify(historiquePersonnagesConsultes));
  }

  public recupererHistoriqueDesPersonnages(): PersonnageReminder[] {
    return plainToClass(PersonnageReminder, JSON.parse(localStorage.getItem(LocalstorageConstants.PERSONNAGES_HISTORIQUE)) as Personnage[]);
  }
}
