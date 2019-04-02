import { makeDebugger, EVENT, unholdPage, dispatchEvent } from 'utils'

/*
   EVENT.PREVIEW_OPEN,
   EVENT.PREVIEW_CLOSE,
   EVENT.UPLOAD_IMG_START,
   EVENT.UPLOAD_IMG_FINISH,
 */

/* eslint-disable-next-line */
const debug = makeDebugger('L:Preview')

let store = null

export const closePreview = () => {
  unholdPage()
  store.close()
  store.markState({ imageUploading: false, type: null })

  // force call MDEditor's componentWillUnmount to store the draft
  // wait until preview move out of the screean
  setTimeout(() => {
    dispatchEvent(EVENT.PREVIEW_CLOSED)
    store.setViewing({ viewingThread: null })
  }, 200)
}

export const init = _store => {
  store = _store
}

export const uninit = () => {}
