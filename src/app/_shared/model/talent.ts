export class Talent implements Serializable<Talent> {
  ordreAffichage: number;
  nom: string;
  id: number;
  iconPath: string;
  description: string;
  porteeDesc: string;
  coutRessourceDesc: string;
  tempsCastDesc: string;
  cooldownDesc: string;

  deserialize(input): Talent {
    if (input.spell != null) {
      this.ordreAffichage = input.tier;
      this.id = input.spell.id;
      this.nom = input.spell.name;
      this.iconPath = input.spell.icon;
      this.description = input.spell.description;
      this.porteeDesc = input.spell.range;
      this.coutRessourceDesc = input.spell.powerCost;
      this.tempsCastDesc = input.spell.castTime;
      this.cooldownDesc = input.spell.cooldown;
    }

    return this;
  }
}
