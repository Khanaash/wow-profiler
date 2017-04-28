import {Titre} from './titre';
import {Statistiques} from "./statistiques";
import {Classe, CLASSE_CONFIG} from "./classe";
import {Race, RACE_CONFIG} from "./race";

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

  titres: Titre[];
  statistiques: Statistiques;
  classeInfos: Classe;

  deserialize(input): Personnage {
    this.nom = input.name;
    this.faction = input.faction;
    this.genre = input.gender;
    this.derniereModification = input.lastModified;
    this.race = input.race;
    this.imagePortrait = input.thumbnail;
    this.totalHonorableKills = input.totalHonorableKills;
    this.niveau = input.level;

    this.titres = new Array<Titre>();
    for (const currentTitre of input.titles) {
      this.titres.push(new Titre().deserialize(currentTitre));
    }

    this.statistiques = new Statistiques().deserialize(input.stats);
    this.classeInfos = CLASSE_CONFIG.find(classe => input.class === classe.numero);
    this.race = RACE_CONFIG.find(race => input.race === race.numero);

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

  private isFeminin(): boolean {
    return this.genre === 1;
  }

  /** Public Fonctions **/
  public getNomAvecSelectedTitre(): string {
    const selectedTitre = this.getSelectedTitre();
    if (selectedTitre != null) {
      return selectedTitre.nom.replace('%s', this.nom);
    } else {
      return name;
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
