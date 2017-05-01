import {Item} from "./item";
export class Items implements Serializable<Items> {
  ilvlMoyen: number;
  ilvlEquipe: number;

  // Liste des items
  casque: Item;
  cou: Item;
  epaulieres: Item;
  cape: Item;
  plastron: Item;
  tabard: Item;
  brassards: Item;
  gants: Item;
  ceinture: Item;
  jambieres: Item;
  bottes: Item;
  bague1: Item;
  bague2: Item;
  trinket1: Item;
  trinket2: Item;
  arme: Item;
  mainGauche: Item;

  deserialize(input): Items {
    if (input) {
      this.ilvlMoyen = input.averageItemLevel;
      this.ilvlEquipe = input.averageItemLevelEquipped;

      this.casque = new Item().deserialize(input.head);
      this.cou = new Item().deserialize(input.neck);
      this.epaulieres = new Item().deserialize(input.shoulder);
      this.cape = new Item().deserialize(input.back);
      this.plastron = new Item().deserialize(input.chest);
      this.tabard = new Item().deserialize(input.tabard);
      this.brassards = new Item().deserialize(input.wrist);
      this.gants = new Item().deserialize(input.hands);
      this.ceinture = new Item().deserialize(input.waist);
      this.jambieres = new Item().deserialize(input.legs);
      this.bottes = new Item().deserialize(input.feet);
      this.bague1 = new Item().deserialize(input.finger1);
      this.bague2 = new Item().deserialize(input.finger2);
      this.trinket1 = new Item().deserialize(input.trinket1);
      this.trinket2 = new Item().deserialize(input.trinket2);
      this.arme = new Item().deserialize(input.mainHand);
      this.mainGauche = new Item().deserialize(input.offHand);

      this.ordonnerEtNommerItems();
    }

    return this;
  }

  private ordonnerEtNommerItems(): void {
    this.ordonnerEtNommerItem(this.arme, "Arme", 10);
    this.ordonnerEtNommerItem(this.mainGauche, "Main gauche", 20);
    this.ordonnerEtNommerItem(this.casque, "Casque", 30);
    this.ordonnerEtNommerItem(this.cou, "Collier", 40);
    this.ordonnerEtNommerItem(this.epaulieres, "Epaulières", 50);
    this.ordonnerEtNommerItem(this.cape, "Cape", 60);
    this.ordonnerEtNommerItem(this.plastron, "Plastron", 70);
    this.ordonnerEtNommerItem(this.tabard, "Tabard", 80);
    this.ordonnerEtNommerItem(this.brassards, "Brassard", 90);
    this.ordonnerEtNommerItem(this.gants, "Gants", 100);
    this.ordonnerEtNommerItem(this.ceinture, "Ceinture", 110);
    this.ordonnerEtNommerItem(this.jambieres, "Jambières", 120);
    this.ordonnerEtNommerItem(this.bottes, "Bottes", 130);
    this.ordonnerEtNommerItem(this.bague1, "Première bague", 140);
    this.ordonnerEtNommerItem(this.bague2, "Seconde bague", 150);
    this.ordonnerEtNommerItem(this.trinket1, "Premier bijou", 160);
    this.ordonnerEtNommerItem(this.trinket2, "Second bijou", 170);
  }

  private ordonnerEtNommerItem(item: Item, nom: string, ordre: number): void {
    if (item) {
      item.typeSlot = nom;
      item.ordreAffichage = ordre;
    }
  }

  public getAllItemsOrdonnes(): Item[] {
    const items: Item[] = [];

    items.push(this.casque, this.cou, this.cape, this.plastron, this.tabard, this.brassards, this.gants, this.ceinture, this.jambieres, this.bottes
      , this.bague1, this.bague2, this.trinket1, this.trinket2, this.arme, this.mainGauche);

    items.sort((o1, o2) => {
      if (o1.ordreAffichage < o2.ordreAffichage) {
        return -1;
      } else if ((o1.ordreAffichage > o2.ordreAffichage)) {
        return 1;
      } else {
        return 0;
      }
    });
    return items;
  }
}
