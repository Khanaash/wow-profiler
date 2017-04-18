import {Titre} from './titre';
import {Statistiques} from "./statistiques";

export class Personnage implements Serializable<Personnage> {
  /** Atributs **/
  nom: string;
  class: number;
  faction: number;
  genre: number;
  derniereModification: number;
  race: number;
  imagePortrait: string;
  totalHonorableKills: number;

  titres: Titre[];
  statistiques: Statistiques;

  deserialize(input): Personnage {
    this.class = input.class;
    this.nom = input.name;
    this.faction = input.faction;
    this.genre = input.gender;
    this.derniereModification = input.lastModified;
    this.race = input.race;
    this.imagePortrait = input.thumbnail;
    this.totalHonorableKills = input.totalHonorableKills;

    this.titres = new Array<Titre>();
    for (const currentTitre of input.titles) {
      this.titres.push(new Titre().deserialize(currentTitre));
    }

    this.statistiques = new Statistiques().deserialize(input.stats);

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

  /** Public Fonctions **/
  public getNomAvecSelectedTitre(): string {
    const selectedTitre = this.getSelectedTitre();
    if (selectedTitre != null) {
      return selectedTitre.nom.replace('%s', this.nom);
    } else {
      return name;
    }
  }
}
