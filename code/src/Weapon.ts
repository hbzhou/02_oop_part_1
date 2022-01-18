import { Item } from "./Item";

export class Weapon extends Item{

   protected  baseDamage:number;
   protected  damageModifier: number;
   protected  baseDurability: number;
   protected  durabilityModifier:number;

   protected  MODIFIER_CHANGE_RATE:number = 0.01;

   constructor(baseDamage:number,damageModifier: number,baseDurability: number,durabilityModifier:number){
     super();
     this.baseDamage = baseDamage;
     this.damageModifier = damageModifier;
     this.baseDurability = baseDurability;
     this.durabilityModifier = durabilityModifier;
   }


  public  getDamage():number{
     return this.baseDamage + this.damageModifier;
   }

   public  getDurability():number{
     return this.baseDurability + this.durabilityModifier;
   }

   public use():string{
    if (this.getDurability()<0) {
      return `You can't use the ${this.name} , it is broken.`;
    }
    this.durabilityModifier= this.durabilityModifier - this.MODIFIER_CHANGE_RATE;
    const result = this.getDurability()>0? "":`The ${this.name} breaks`;
    return `You use ${this.name}, dealing ${this.getDamage()} points of damage.`;
   }

   public  toString():string {
     return `${this.name} - Value:${this.value}, Weight:${this.weight},Damage:${this.getDamage()} Durability:${this.getDurability()}`
   }

}
