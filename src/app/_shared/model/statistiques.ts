export class Statistiques implements Serializable<Statistiques> {
  pointDeVie: number;
  force: number;
  agilite: number;
  intelligence: number;
  endurance: number;
  critiquePourcentage: number;
  critique: number;
  hatePourcentage: number;
  hate: number;
  maitrisePourcentage: number;
  maitrise: number;
  volDeViePourcentage: number;
  volDeVie: number;
  polyvalence: number;
  polyvalenceBonusDegats: number;
  polyvalenceBonusSoins: number;
  polyvalenceReductionDegatsPris: number;
  armure: number;
  esquivePourcentage: number;
  esquive: number;
  paradePourcentage: number;
  parade: number;
  blocagePourcentage: number;
  blocage: number;
  // mainHandDmgMin: 1712;
  // powerType: insanity;
  // power: 100;
  // speedRating: 27.275;
  // speedRatingBonus: 4.632017;
  // leechRatingBonus: 0;
  // avoidanceRating: 0;
  // avoidanceRatingBonus: 0;
  // spellPen: 0;
  // mana5: 0;
  // mana5Combat: 0;
  // mainHandDmgMax: 3182;
  // mainHandSpeed: 1.421;
  // mainHandDps: 1721.9199;
  // offHandDmgMin: 0;
  // offHandDmgMax: 0;
  // offHandSpeed: 1.579;
  // offHandDps: 0;
  // rangedDmgMin: -1;
  // rangedDmgMax: -1;
  // rangedSpeed: -1;
  // rangedDps: -1

  deserialize(input): Statistiques {
    this.pointDeVie = input.health;
    this.force = input.str;
    this.agilite = input.agi;
    this.intelligence = input.int;
    this.endurance = input.sta;
    this.critique = input.critRating;
    this.critiquePourcentage = input.crit;
    this.hatePourcentage = input.haste;
    this.hate = input.hasteRating;
    this.maitrisePourcentage = input.mastery;
    this.maitrise = input.masteryRating;
    this.volDeVie = input.leech;
    this.volDeViePourcentage = input.leechRating;
    this.polyvalence = input.versatility;
    this.polyvalenceBonusDegats = input.versatilityDamageDoneBonus;
    this.polyvalenceBonusSoins = input.versatilityHealingDoneBonus;
    this.polyvalenceReductionDegatsPris = input.versatilityDamageTakenBonus;
    this.armure = input.armor;
    this.esquive = input.dodgeRating;
    this.esquivePourcentage = input.dodge;
    this.parade = input.parryRating;
    this.paradePourcentage = input.parry;
    this.blocage = input.blockRating;
    this.blocagePourcentage = input.block;
    return this;
  }

}
