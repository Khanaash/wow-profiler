import {Type} from "class-transformer";

export class PersonnageReminder {
  nom: string;
  niveau: number;
  serveur: string;
  classe: string;
  ilvl: number;
  hautsFaitsPoints: number;
  @Type(() => Date)
  heureConsultation: Date;
  imagePortrait: string;
  couleurCss: string;

  public constructor(nom: string, niveau: number, serveur: string, classe: string, imagePortrait: string, couleurCss: string,
                     ilvl: number, hautsFaitsPoints: number) {
    this.nom = nom;
    this.niveau = niveau;
    this.serveur = serveur;
    this.classe = classe;
    this.imagePortrait = imagePortrait;
    this.heureConsultation = new Date();
    this.couleurCss = couleurCss;
    this.ilvl = ilvl;
    this.hautsFaitsPoints = hautsFaitsPoints;
  }
}
