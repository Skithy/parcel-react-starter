import 'normalize.css'

import React from 'react'
import { render } from 'react-dom'

import { App } from './view/App'

if (module.hot) {
  module.hot.accept()
}

render(<App />, document.getElementById('app'))
