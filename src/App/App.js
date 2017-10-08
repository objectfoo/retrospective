import React, {Component} from 'react'
import {DEFAULT_STATE, LIST_CONFIGS} from '../constants'
import {makeProps} from '../helpers'
import {Header, Footer} from './components'
import ListSection from '../ListSection'
import {v4} from 'uuid'

export class App extends Component {
  constructor(props) {
    super(props)
    const {fnCreateAsync, fnUpdate, fnDeleteAsync} = this
    this.state = {...DEFAULT_STATE}

    // prop factory helpers for render
    // this.goodPropFactory, this.nextPropFactory ...
    LIST_CONFIGS.forEach(c =>
      this[`${c.type}PropFactory`] = makeProps({
        fnCreateAsync,
        fnUpdate,
        fnDeleteAsync,
        ...c
      })
    )
  }

  render() {
    return (
      <div className="retro display-flex-col">
        <div className='accent accent-color'>
          <Header />
        </div>
        <div className='accent'>
          <main className='retro-main'>
            <ListSection {...this.goodPropFactory(this)} />
            <ListSection {...this.badPropFactory(this)} />
            <ListSection {...this.nextPropFactory(this)} />
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
      return state;
    }, callback())
  }

  fnUpdate = ({target}) => {
    console.log('fnUpdate', target)
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
