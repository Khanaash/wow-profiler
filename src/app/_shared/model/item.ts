import {ITEM_RARITY_CONFIG, ItemQuality} from "./item-quality";
export class Item implements Serializable<Item> {
  id: number;
  nom: string;
  typeSlot: string;
  ordreAffichage: number;
  qualite: ItemQuality;
  ilvl: number;
  /* Enchant/Gemmes/Transmog/ etc.. */
  enchantId: number;
  transmogItemId: number;
  gemme1Id: number;
  gemme2Id: number;
  gemme3Id: number;
  nomIcon: string;

  deserialize(input: any): Item {
    if (input) {
      this.id = input.id;
      this.nom = input.name;
      this.qualite = ITEM_RARITY_CONFIG.find(rarity => input.quality === rarity.numero);
      this.ilvl = input.itemLevel;
      this.enchantId = input.enchant;
      this.transmogItemId = input.transmogItem;
      this.gemme1Id = input.gem0;
      this.gemme2Id = input.gem1;
      this.gemme3Id = input.gem2;
      this.nomIcon = input.icon;
    }

    return this;
  }
}
