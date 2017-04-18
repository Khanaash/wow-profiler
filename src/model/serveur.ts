export class Serveur implements Serializable<Serveur> {
  type: string;
  nom: string;
  battlegroup: string;
  locale: string;

  deserialize(input): Serveur {
    this.type = input.type;
    this.nom = input.name;
    this.battlegroup = input.battlegroup;
    this.locale = input.locale;
    return this;
  }

  public nomComplet() {
    return this.nom.concat(" - ").concat(this.battlegroup).concat(' (').concat(this.type).concat(')');
  }
}
