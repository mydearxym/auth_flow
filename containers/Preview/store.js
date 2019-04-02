/*
 * PreviewStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, unholdPage } from 'utils'

const PreviewStore = t
  .model('PreviewStore', {
    // header:
    // body:
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
  }))
  .actions(self => ({
    open({ type }) {
      self.visible = true
      self.type = type
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    close() {
      self.visible = false
      unholdPage()
      // self.type = TYPE.PREVIEW_ROOT_STORE
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PreviewStore
