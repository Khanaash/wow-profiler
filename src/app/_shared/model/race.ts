export const RACE_CONFIG: Race[] = [
  {
    numero: 1,
    code: 'HUMAN',
    nomAffichage: 'Humain',
    nomFemininAffichage: 'Humaine'
  },
  {
    numero: 2,
    code: 'ORC',
    nomAffichage: 'Orc',
    nomFemininAffichage: 'Orque'
  },
  {
    numero: 3,
    code: 'DWARF',
    nomAffichage: 'Nain',
    nomFemininAffichage: 'Naine'
  },
  {
    numero: 4,
    code: 'NIGHT-ELF',
    nomAffichage: 'Elfe de la nuit'
  },
  {
    numero: 5,
    code: 'UNDEAD',
    nomAffichage: 'Mort-vivant',
    nomFemininAffichage: 'Mort-vivante'
  },
  {
    numero: 6,
    code: 'TAUREN',
    nomAffichage: 'Tauren'
  },
  {
    numero: 7,
    code: 'GNOME',
    nomAffichage: 'Gnome'
  },
  {
    numero: 8,
    code: 'TROLL',
    nomAffichage: 'Troll',
    nomFemininAffichage: 'Trollesse'
  },
  {
    numero: 9,
    code: 'GOBLIN',
    nomAffichage: 'Gobelin',
    nomFemininAffichage: 'Gobeline'
  },
  {
    numero: 10,
    code: 'BLOOD-ELF',
    nomAffichage: 'Elfe de sang'
  },
  {
    numero: 11,
    code: 'DRAENEI',
    nomAffichage: 'Draenei'
  },
  {
    numero: 22,
    code: 'WORGEN',
    nomAffichage: 'Worgen'
  },
  {
    numero: 23,
    code: 'PADAREN-NEUTRAL',
    nomAffichage: 'Pandaren',
    nomFemininAffichage: 'Pandarene'
  },
  {
    numero: 24,
    code: 'PADAREN-ALLI',
    nomAffichage: 'Pandaren',
    nomFemininAffichage: 'Pandarene'
  },
  {
    numero: 25,
    code: 'PADAREN-HORDE',
    nomAffichage: 'Pandaren',
    nomFemininAffichage: 'Pandarene'
  }
];

export class Race  {
  numero: number;
  code: string;
  nomAffichage: string;
  nomFemininAffichage?: string;
}
