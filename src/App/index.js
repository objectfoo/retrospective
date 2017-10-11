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
    const actions = {fnCreateAsync, fnUpdateAsync, fnDeleteAsync}

    return (
      <div className='retro display-flex-column'>
        <div className='accent accent-color'>
          <Header />
        </div>
        <div className='accent'>
          <main className='retro-main'>
            <ListSection {...{
              list: this.state['good'],
              type: 'good',
              title: 'What went well?',
              ...actions
            }} />
            <ListSection {...{
              list: this.state['bad'],
              type: 'bad',
              title: 'When needs improvement?',
              ...actions
            }} />
            <ListSection {...{
              list: this.state['next'],
              type: 'next',
              title: 'What should we try next time?',
              ...actions
            }} />
          </main>
        </div>
        <div className='accent accent-color flex-align-bottom'>
          <Footer version={this.props.version} />
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

  fnUpdateAsync = ({type, id, ...rest}, cb) => {
    const callback = cb || (() => null)

    this.setState(state => {
      if ('vote' in rest) {
        state[type].byId[id].value = rest.value
      } else {
        state[type].byId[id].text = rest.text
      }
    }, callback())
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
