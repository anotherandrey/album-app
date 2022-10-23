import { makeObservable, observable, action } from 'mobx'

class Store<T> {
  public items: T[] = []

  addItems(items: T[]): void {
    this.items = [...this.items, ...items]
  }

  addItem(item: T): void {
    this.addItems([item])
  }

  deleteItem(item: T): void {
    this.items = this.items.filter(_item => _item !== item)
  }

  deleteAllItems(): void {
    this.items = []
  }

  constructor() {
    makeObservable(this, {
      items: observable,
      addItems: action,
      addItem: action,
      deleteItem: action,
    })
  }
}

export { Store }
