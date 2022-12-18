import { makeObservable, observable, override } from 'mobx'
import { Store } from './Store'
import * as Api from '../openapi'

class ImagesStore extends Store<Api.ImageDto> {
  public totalPages: number = 0

  constructor() {
    super()
    makeObservable(this, {
      totalPages: observable,
      addItems: override,
      addItem: override,
      deleteItem: override,
    })
  }
}

const imagesStore = new ImagesStore()
export { imagesStore }
