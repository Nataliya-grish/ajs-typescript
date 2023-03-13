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
    return this._items.reduce((sum: number, element: Buyable) => sum + element.price, 0);
  }

  totalSumDiscount(discount: number): number {
    let sum: number = this.totalSum();
    return sum * ((100 - discount) / 100);
  }

  deleteItem(id: number): void {
    this._items = this._items.filter((element: Buyable) => element.id !== id);
  }
}
