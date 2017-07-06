import {Talent} from "app/_shared/model/talent";
export class Specialisation implements Serializable<Specialisation> {
  nom: string;
  role: string;
  ordreAffichage: number;
  description: string;
  active: boolean;
  patternTalent: string;
  iconPath: string;
  talents: Talent[];

  deserialize(input): Specialisation {
    if (input.spec != null) {
      this.nom = input.spec.name;
      this.role = input.spec.role;
      this.ordreAffichage = input.spec.order;
      this.description = input.spec.description;
      this.patternTalent = input.calcTalent;
      this.active = input.selected === true;
      this.iconPath = input.spec.icon;

      this.talents = [];
      for (const currentTalent of input.talents) {
        this.talents.push(new Talent().deserialize(currentTalent));
      }
    }
    return this;
  }
}
