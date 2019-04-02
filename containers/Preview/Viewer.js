import React from 'react'

import DefaultViewer from './DefaultViewer'
// import * as logic from './logic'

// const Viewer = ({ type, root, attachment, attUser }) => {
const Viewer = ({ type }) => {
  switch (type) {
    default:
      return <DefaultViewer />
  }
}

export default Viewer
