import React from 'react'
import { Provider } from 'mobx-react'

import ThemeWrapper from 'containers/ThemeWrapper'
import Preview from 'containers/Preview'
import AuthLayout from 'components/AuthLayout'
import AuthBanner from 'components/AuthBanner'

import SignupForm from 'containers/SignupForm'
import Footer from 'containers/Footer'

import GAWraper from 'components/GAWraper'
// import ErrorPage from 'components/ErrorPage'
import initRootStore from 'stores/init'

import { makeDebugger } from 'utils'

/* eslint-disable-next-line */
const debug = makeDebugger('page:community')

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

export default class SignUp extends React.Component {
  static async getInitialProps() {
    // const mainPath = getMainPath(props)
    // const subPath = getMainPath(props)

    return {}
  }

  constructor(props) {
    super(props)
    const store = props.statusCode
      ? initRootStore({ langSetup: {} })
      : initRootStore({ ...props })

    this.store = store
    // this.store = initRootStore({ ...props })
  }

  render() {
    // const { statusCode, target } = this.props

    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            <Preview />
            <AuthLayout>
              <AuthBanner />
              <SignupForm />
              <Footer />
            </AuthLayout>
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
