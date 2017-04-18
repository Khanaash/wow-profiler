export class Titre implements Serializable<Titre> {
  id: number;
  nom: string;
  selected: boolean;

  deserialize(input): Titre {
    this.id = input.id;
    this.nom = input.name;
    this.selected = input.selected;
    return this;
  }
}
