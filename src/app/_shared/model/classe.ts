export const CLASSE_CONFIG: Classe[] = [
  {
    numero: 1,
    code: 'WAR',
    colorCss: '#c69b6d',
    cardBackgroundLocation: 'background-warrior.jpg',
    nomAffichage: 'Guerrier'
  },
  {
    numero: 2,
    code: 'PAL',
    colorCss: '#f48cba',
    cardBackgroundLocation: 'background-paladin.jpg',
    nomAffichage: 'Paladin'
  },
  {
    numero: 3,
    code: 'HUNT',
    colorCss: '#aad372',
    cardBackgroundLocation: 'background-hunt.jpg',
    nomAffichage: 'Chasseur'
  },
  {
    numero: 4,
    code: 'ROGUE',
    colorCss: '#fff468',
    cardBackgroundLocation: 'background-voleur.jpg',
    nomAffichage: 'Voleur'
  },
  {
    numero: 5,
    code: 'PRIEST',
    colorCss: '#f0ebe0',
    cardBackgroundLocation: 'background-pretre.jpg',
    nomAffichage: 'Prêtre'
  },
  {
    numero: 6,
    code: 'DK',
    colorCss: '#c41e3b',
    cardBackgroundLocation: 'background-dk.jpg',
    nomAffichage: 'Chevalier de la mort'
  },
  {
    numero: 7,
    code: 'SHAM',
    colorCss: '#2359ff',
    cardBackgroundLocation: 'background-shaman.jpg',
    nomAffichage: 'Chaman'
  },
  {
    numero: 8,
    code: 'MAGE',
    colorCss: '#68ccef',
    cardBackgroundLocation: 'background-mage.jpg',
    nomAffichage: 'Mage'
  },
  {
    numero: 9,
    code: 'WARLOCK',
    colorCss: '#9382c9',
    cardBackgroundLocation: 'background-warlock.jpg',
    nomAffichage: 'Démoniste'
  },
  {
    numero: 10,
    code: 'MONK',
    colorCss: '#00ffba',
    cardBackgroundLocation: 'background-moine.jpg',
    nomAffichage: 'Moine'
  },
  {
    numero: 11,
    code: 'DRUID',
    colorCss: '#ff7c0a',
    cardBackgroundLocation: 'background-druide.jpg',
    nomAffichage: 'Druide'
  },
  {
    numero: 12,
    code: 'DH',
    colorCss: '#a330c9',
    cardBackgroundLocation: 'background-dh.jpg',
    nomAffichage: 'Chasseur de démons'
  }
]

export class Classe  {
  numero: number;
  code: string;
  colorCss: string;
  cardBackgroundLocation: string;
  nomAffichage: string;
}
