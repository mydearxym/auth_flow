import React from 'react'

import { TYPE } from 'utils'

import DefaultViewer from './DefaultViewer'
// import * as logic from './logic'

// const Viewer = ({ type, root, attachment, attUser }) => {
const Viewer = ({ type }) => {
  switch (type) {
    case TYPE.PREVIEW_ACCOUNT_VIEW:
      return <h3>PREVIEW_ACCOUNT_VIEW</h3>

    default:
      return <DefaultViewer />
  }
}

export default Viewer
