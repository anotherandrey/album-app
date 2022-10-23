import { makeObservable, override } from 'mobx'
import { Store } from './Store'
import * as Api from '../openapi'

class AlbumStore extends Store<Api.ImageDto> {
  constructor() {
    super()
    makeObservable(this, {
      addItems: override,
      addItem: override,
      deleteItem: override,
    })
  }
}

const albumStore = new AlbumStore()
export { albumStore }
