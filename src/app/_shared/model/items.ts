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
  chemise: Item;
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
      this.chemise = new Item().deserialize(input.shirt);
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
    this.ordonnerEtNommerItem(this.casque, "Casque", 1, 0);
    this.ordonnerEtNommerItem(this.cou, "Collier", 2, -100);
    this.ordonnerEtNommerItem(this.epaulieres, "Epaulières", 3, -200);
    this.ordonnerEtNommerItem(this.cape, "Cape", 4, -300);
    this.ordonnerEtNommerItem(this.plastron, "Plastron", 5, -300);
    this.ordonnerEtNommerItem(this.chemise, "Chemise", 6, -400);
    this.ordonnerEtNommerItem(this.tabard, "Tabard", 7, -500);
    this.ordonnerEtNommerItem(this.brassards, "Brassard", 8, -600);
    this.ordonnerEtNommerItem(this.gants, "Gants", 9, -700);
    this.ordonnerEtNommerItem(this.ceinture, "Ceinture", 10, -800);
    this.ordonnerEtNommerItem(this.jambieres, "Jambières", 11, -900);
    this.ordonnerEtNommerItem(this.bottes, "Bottes", 12, -1000);
    this.ordonnerEtNommerItem(this.bague1, "Première bague", 13, -1100);
    this.ordonnerEtNommerItem(this.bague2, "Seconde bague", 14, -110);
    this.ordonnerEtNommerItem(this.trinket1, "Premier bijou", 15, -1200);
    this.ordonnerEtNommerItem(this.trinket2, "Second bijou", 16, -1200);
    this.ordonnerEtNommerItem(this.arme, "Arme", 17, -1300);
    this.ordonnerEtNommerItem(this.mainGauche, "Main gauche", 18, -1400);
  }

  private ordonnerEtNommerItem(item: Item, nom: string, ordre: number, decalageHeightEmptyIcon: number): void {
    if (item) {
      item.typeSlot = nom;
      item.ordreAffichage = ordre;
      item.decalageHeightEmptyIcon = decalageHeightEmptyIcon;
    }
  }

  public getItemsGaucheOrdonnes(): Item[] {
    const items: Item[] = [this.casque, this.cou, this.epaulieres, this.cape, this.plastron, this.chemise, this.tabard, this.brassards];
    this.sortItemsParOrdreAffichage(items);
    return items;
  }

  public getItemsDroiteOrdonnes(): Item[] {
    const items: Item[] = [this.gants, this.ceinture, this.jambieres, this.bottes, this.bague1, this.bague2, this.trinket1, this.trinket2];
    this.sortItemsParOrdreAffichage(items);
    return items;
  }

  public getItemsBasOrdonnes(): Item[] {
    const items: Item[] = [this.arme, this.mainGauche];
    this.sortItemsParOrdreAffichage(items);
    return items;
  }

  private sortItemsParOrdreAffichage(items: Item[]) {
    items.sort((o1, o2) => {
      if (o1.ordreAffichage < o2.ordreAffichage) {
        return -1;
      } else if ((o1.ordreAffichage > o2.ordreAffichage)) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
