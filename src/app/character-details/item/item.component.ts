import {Component, Input, OnInit} from '@angular/core';
import {Item} from "app/_shared/model/item";
import {environment} from "environments/environment";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input("item") item: Item;
  @Input() alignerADroite = false;

  constructor() { }

  ngOnInit() {
  }

  get getIconItemUrl(): string {
    return `${environment.baseUrlBlizzardRenderIcons56Px}/${this.item.nomIcon}.jpg`;
  }

  public getItemWowHeadUrlRelation(): string {
    let urlWowHead = `http://www.wowhead.com/item=${this.item.id}&domain=fr`;
    if (this.item.enchantId != null) {
      urlWowHead = `${urlWowHead}&ench=${this.item.enchantId}`;
    }
    if (this.item.bonusLists != null && this.item.bonusLists.length > 0) {
      urlWowHead = `${urlWowHead}&bonus=${this.item.bonusLists.join(':')}`;
    }
    if (this.item.gemsList != null && this.item.gemsList.length > 0) {
      urlWowHead = `${urlWowHead}&gems=${this.item.gemsList.join(':')}`;
    }
    if (this.item.transmogItemId != null) {
      urlWowHead = `${urlWowHead}&transmog=${this.item.transmogItemId}`;
    }
    return urlWowHead;
  }
}
