import { Consumable } from "./Consumable";
import { Item } from "./Item";

// your code goes here
export class Pizza extends Item implements Consumable{

  consumed: boolean;
  spoiled: boolean;

  numberOfSlice: number;

  constructor(numberOfSlice:number, spoiled:boolean){
    super();
    this.numberOfSlice = numberOfSlice;
    this.spoiled = spoiled;
  }


  use(): string {
    throw new Error("Method not implemented.");
  }
  eat(): string {
    throw new Error("Method not implemented.");
  }

}
