import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input() nomStat: string;
  @Input() valeur: number;
  @Input() valeurPourcentage: number;
  @Input() valeurPourcentageSecondaire?: number;
  @Input() cssIcon: string;
  @Input() couleur: string;
  @Input() isPourcentage = false;

  constructor() { }

  ngOnInit() {
  }

}
