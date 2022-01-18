import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {

    protected name: string;

    public value: number;

    public weight: number;



    public compareTo(other: Item): number {
        if (this.value > other.value){
            return 1;
        }

        if(this.value < other.value){
            return -1;
        }

      const otherName:string = other.name;
      const len:number =  Math.min(this.name.length, otherName.length);
      for (let i = 0; i < len; i++) {
          const ch = this.name.toLowerCase().charAt(i);
          const otherCh = otherName.toLowerCase().charAt(i);
         if( ch!== otherCh){
             return ch.localeCompare(otherCh);
         }

      }
      return 0;

    }

    public toString():string {
        // ”ring − Value: 3000, Weight: 0.01”
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`
    }

    use():string{
        return "";
    }
}
