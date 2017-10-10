import {Personnage} from "app/_shared/model/personnage";

export class PersonnageReminder {
  nom: string;
  niveau: number;
  serveur: string;
  classe: string;
  heureConsultation: Date;
  imagePortrait: string;

  public constructor(nom: string, niveau: number, serveur: string, classe: string, imagePortrait: string) {
    this.nom = nom;
    this.niveau = niveau;
    this.serveur = serveur;
    this.classe = classe;
    this.imagePortrait = imagePortrait;
    this.heureConsultation = new Date();
  }
}
