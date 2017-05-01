export class Item implements Serializable<Item> {
  id: number;
  nom: string;
  typeSlot: string;
  ordreAffichage: number;
  qualite: number;
  ilvl: number;
  /* Enchant/Gemmes/Transmog/ etc.. */
  enchantId: number;
  transmogItemId: number;
  gemme1Id: number;
  gemme2Id: number;
  gemme3Id: number;

  deserialize(input: any): Item {
    if (input) {
      this.id = input.id;
      this.nom = input.name;
      this.qualite = input.quality;
      this.ilvl = input.itemLevel;
      this.enchantId = input.enchant;
      this.transmogItemId = input.transmogItem;
      this.gemme1Id = input.gem0;
      this.gemme2Id = input.gem1;
      this.gemme3Id = input.gem2;
    }

    return this;
  }
}
