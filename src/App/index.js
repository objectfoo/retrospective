import React, {Component} from 'react'
import {DEFAULT_STATE} from '../constants'
import {Header, Footer} from './components'
import ListSection from '../ListSection'
import {v4} from 'uuid'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {...DEFAULT_STATE}
  }

  render() {
    const {fnCreateAsync, fnUpdateAsync, fnDeleteAsync} = this

    return (
      <div className="retro display-flex-column">
        <div className='accent accent-color'>
          <Header />
        </div>
        <div className='accent'>
          <main className='retro-main'>
            <ListSection {...{
              list: this.state['good'],
              type: 'good',
              title: 'What went well?',
              ...{fnCreateAsync, fnUpdateAsync, fnDeleteAsync}
            }} />
            <ListSection {...{
              list: this.state['bad'],
              type: 'bad',
              title: 'When needs improvement?',
              isVoting: true,
              ...{fnCreateAsync, fnUpdateAsync, fnDeleteAsync}
            }} />
            <ListSection {...{
              type: 'next',
              title: 'What should we try next time?',
              list: this.state['next'],
              ...{fnCreateAsync, fnUpdateAsync, fnDeleteAsync}
            }} />
          </main>
        </div>
        <div className='accent accent-color flex-align-bottom'>
          <Footer version={this.props.pkg.version} />
        </div>
      </div>
    )
  }

  fnCreateAsync = ({type, ...rest}, cb) => {
    const callback = cb || (() => null)
    const uuid = v4()
    this.setState(state => {
      state[type].byId[uuid] = {id: uuid, ...rest}
      state[type].allIds.unshift(uuid)
      return state
    }, callback())
  }

  fnUpdateAsync = ({target}, cb) => {
    const callback = cb || (() => null)
    console.log('fnUpdateAsync', target)
    callback()
  }

  fnDeleteAsync = ({target: {dataset: {id, type}}}, cb) => {
    const callback = cb || (() => null)

    this.setState(state => {
      delete state[type].byId[id]
      state[type].allIds = state[type].allIds.filter(i => i !== id)
      return state
    }, callback())
  }
}

export default App
