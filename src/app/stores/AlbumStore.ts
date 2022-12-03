import { makeObservable, observable, override } from 'mobx'
import { Store } from './Store'
import * as Api from '../openapi'

class AlbumStore extends Store<Api.ImageDto> {
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

const albumStore = new AlbumStore()
export { albumStore }
