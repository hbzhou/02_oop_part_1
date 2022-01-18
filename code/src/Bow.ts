import { Weapon } from "./Weapon";

class Bow extends Weapon {

  constructor(baseDamage:number,damageModifier: number,baseDurability: number,durabilityModifier:number){
    super(baseDamage, durabilityModifier, baseDurability,durabilityModifier);
    this.name = "Bow";
  }

  public polish():void {
    this.durabilityModifier = this.durabilityModifier + this.MODIFIER_CHANGE_RATE;

  }
}
