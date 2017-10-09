import {Titre} from './titre';
import {Statistiques} from "./statistiques";
import {Classe, CLASSE_CONFIG} from "./classe";
import {Race, RACE_CONFIG} from "./race";
import {Items} from "./items";
import {Specialisation} from "app/_shared/model/specialisation";
import {current} from "codelyzer/util/syntaxKind";
import {StatistiqueDisplayer} from "app/_shared/model/statistique-displayer";

export class Personnage implements Serializable<Personnage> {
  /** Atributs **/
  nom: string;
  faction: number;
  genre: number;
  derniereModification: number;
  race: Race;
  imagePortrait: string;
  totalHonorableKills: number;
  niveau: number;
  pointsHautFaits: number;

  titres: Titre[];
  statistiques: Statistiques;
  classeInfos: Classe;
  items: Items;
  specialisations: Specialisation[];

  deserialize(input): Personnage {
    this.nom = input.name;
    this.faction = input.faction;
    this.genre = input.gender;
    this.derniereModification = input.lastModified;
    this.race = input.race;
    this.imagePortrait = input.thumbnail;
    this.totalHonorableKills = input.totalHonorableKills;
    this.niveau = input.level;
    this.pointsHautFaits = input.achievementPoints;

    this.titres = new Array<Titre>();
    for (const currentTitre of input.titles) {
      this.titres.push(new Titre().deserialize(currentTitre));
    }

    this.statistiques = new Statistiques().deserialize(input.stats);
    this.classeInfos = CLASSE_CONFIG.find(classe => input.class === classe.numero);
    this.race = RACE_CONFIG.find(race => input.race === race.numero);
    this.items = new Items().deserialize(input.items);

    this.specialisations = new Array<Specialisation>();
    for (const currentSpecialisation of input.talents) {
      this.specialisations.push(new Specialisation().deserialize(currentSpecialisation));
    }

    return this;
  }

  /** Private Fonctions **/
  private getSelectedTitre(): Titre {
    let selectedTitre: Titre = null;
    if (this.titres && this.titres.length > 0) {
      for (const titre of this.titres) {
        if (titre.selected) {
          selectedTitre = titre;
          break;
        }
      }
    }
    return selectedTitre;
  }

  public getMainStatistique(): StatistiqueDisplayer {
    const agilite = this.statistiques.agilite;
    const force = this.statistiques.force;
    const intelligence = this.statistiques.intelligence;

    const mainStat = new StatistiqueDisplayer();
    mainStat.nom = "Agilité";
    mainStat.valeurEntiere = agilite;
    mainStat.cssIcon = "fa fa-stack-1x fa-paw";
    mainStat.couleur = "#e28b21";
    if (force > mainStat.valeurEntiere) {
      mainStat.nom = "Force";
      mainStat.valeurEntiere = force;
      mainStat.cssIcon = "ra ra-sword";
      mainStat.couleur = "#c54c4d";
    }
    if (intelligence > mainStat.valeurEntiere) {
      mainStat.nom = "Intelligence";
      mainStat.valeurEntiere = intelligence;
      mainStat.cssIcon = "ra ra-crystal-ball";
      mainStat.couleur = "#b934cb";
    }

    return mainStat;
  }

  public getMainSpecialisation(): Specialisation {
    for (const specialisation of this.specialisations) {
      if (specialisation.active) {
        return specialisation;
      }
    }
    return null;
  }

  private isFeminin(): boolean {
    return this.genre === 1;
  }

  /** Public Fonctions **/
  public getNomAvecSelectedTitre(): string {
    const selectedTitre = this.getSelectedTitre();
    if (selectedTitre != null) {
      return selectedTitre.nom.replace('%s', this.nom);
    } else {
      return this.nom;
    }
  }

  public getClasseLibelle(): string {
    return this.isFeminin() && typeof this.classeInfos.nomFemininAffichage !== 'undefined' ? this.classeInfos.nomFemininAffichage : this.classeInfos.nomAffichage;
  }

  public getRaceLibelle(): string {
    return this.isFeminin() && typeof this.race.nomFemininAffichage !== 'undefined' ? this.race.nomFemininAffichage : this.race.nomAffichage;
  }

  public isHorde(): boolean {
    return this.faction === 1;
  }
}
