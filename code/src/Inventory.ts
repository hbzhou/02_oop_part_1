import {Item} from './Item'
import { ItemComparator } from './ItemComparator';

export class Inventory {

  items: Item[] = new Array();

  addItem(item: Item) {
    this.items.push(item);
  }

  public sort (): void{
       this.items.sort((item1, item2) =>item1.value - item2.value);
  }

  public sortByComparator (comparator: ItemComparator):void {
       this.items.sort((item1, item2)=> comparator.compare(item1, item2))
  }

  public toString():string {
    return this.items.join(',')
  }
}
