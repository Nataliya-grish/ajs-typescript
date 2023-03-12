import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  totalSum(): number {
    let sum: number = 0;
    this._items.forEach((element: Buyable) => {
      sum = sum + element.price;
    });
    return sum;
  }

  totalSumDiscount(discount: number): number {
    let sum: number = this.totalSum();
    return sum * ((100 - discount) / 100);
  }

  deleteItem(id: number): void {
    this._items.forEach((element: Buyable, index: number) => {
      if (id === element.id) {
        this._items.splice(index, 1)
      }
    })
  }
}
