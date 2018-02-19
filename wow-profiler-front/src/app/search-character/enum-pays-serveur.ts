/**
 * Created by vlegrand on 22/03/17.
 */

export enum EnumPaysServeur {
  GB,
  DE,
  ES,
  FR,
  IT,
  PL,
  PT,
  RU
}

export class EnumPaysServeurUtils {
  static getValueEnum(locale: string) {
    switch (locale) {
      case 'en_GB':
        return EnumPaysServeur.GB;
      case 'de_DE':
        return EnumPaysServeur.DE;
      case 'es_ES':
        return EnumPaysServeur.ES;
      case 'fr_FR':
        return EnumPaysServeur.FR;
      case 'it_IT':
        return EnumPaysServeur.IT;
      case 'pl_PL':
        return EnumPaysServeur.PL;
      case 'pt_PT':
        return EnumPaysServeur.PT;
      case 'ru_RU':
        return EnumPaysServeur.RU;
      default :
        return null;
    }
  }
  static getPaysAffichage(value: EnumPaysServeur) {
    switch (value) {
      case EnumPaysServeur.GB:
        return 'Anglais';
      case EnumPaysServeur.DE:
        return 'Allemagne';
      case EnumPaysServeur.ES:
        return 'Espagne';
      case EnumPaysServeur.FR:
        return 'France';
      case EnumPaysServeur.IT:
        return 'Italie';
      case EnumPaysServeur.PL:
        return 'Pologne';
      case EnumPaysServeur.PT:
        return 'Portugal';
      case EnumPaysServeur.RU:
        return 'Russe';
      default :
        return null;
    }
  }
}
