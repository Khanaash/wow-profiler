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
  gemsList: number[];
  bonusLists: number[]; // Pour wowhead
  nomIcon: string;
  emptyItem = false;
  decalageHeightEmptyIcon: number;

  deserialize(input: any): Item {
    if (input) {
      this.id = input.id;
      this.nom = input.name;
      this.qualite = ITEM_RARITY_CONFIG.find(rarity => input.quality === rarity.numero);
      this.ilvl = input.itemLevel;
      this.enchantId = input.tooltipParams.enchant;
      this.transmogItemId = input.tooltipParams.transmogItem;
      this.gemsList = [];
      if (input.tooltipParams.gem0) {
        this.gemsList.push(input.tooltipParams.gem0);
      }
      if (input.tooltipParams.gem1) {
        this.gemsList.push(input.tooltipParams.gem1);
      }
      if (input.tooltipParams.gem2) {
        this.gemsList.push(input.tooltipParams.gem2);
      }
      this.bonusLists = input.bonusLists;
      this.nomIcon = input.icon;
    } else {
      this.emptyItem = true;
    }

    return this;
  }
}
