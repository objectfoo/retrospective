import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import pkg from '../package.json'
import './normalize.css'
import './index.css'

ReactDOM.render(<App {...{version: pkg.version}} />, document.getElementById('root'))
registerServiceWorker()
