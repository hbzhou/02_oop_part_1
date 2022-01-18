// your code goes here
import {Weapon} from './Weapon'
export class Sword extends Weapon {

  constructor(baseDamage:number,damageModifier: number,baseDurability: number,durabilityModifier:number){
    super(baseDamage, durabilityModifier, baseDurability,durabilityModifier);
    this.name = "Sword";
  }

  public polish(): void{
    this.damageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;

  }


}
