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

  constructor() { }

  ngOnInit() {
  }

  get getIconItemUrl(): string {
    return `${environment.baseUrlBlizzardRenderIcons56Px}/${this.item.nomIcon}.jpg`;
  }
}
