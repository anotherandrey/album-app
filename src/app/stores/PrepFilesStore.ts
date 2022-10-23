import { makeObservable, override } from 'mobx'
import { Store } from './Store'

class PrepFilesStore extends Store<File> {
  constructor() {
    super()
    makeObservable(this, {
      addItems: override,
      addItem: override,
      deleteItem: override,
    })
  }
}

const prepFilesStore = new PrepFilesStore()
export { prepFilesStore }
