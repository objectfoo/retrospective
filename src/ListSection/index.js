import React from 'react'
import {
  NewItemEntry,
} from './components'
import SectionItem from './SectionItem'

export class ListSection extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    const {title, type, list, ...rest} = this.props

    return(
      <div className='section'>
        <h2 key={`${title}-title`}>{title}</h2>
        <div className='section-list'>
          <div className='section-input-form-wrapper'>
            <form onSubmit={this.handleSubmit}>
              <NewItemEntry {...{
                onChange: this.handleChange,
                value: this.state.value,
                type,
                ...rest
              }} />
            </form>
          </div>
          {list.allIds.map(uuid => (
            <SectionItem key={uuid} {...{type, ...rest, ...list.byId[uuid]}} />
          ))}
        </div>
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const {fnCreateAsync, type} = this.props
    const callback = () => this.setState(state => ({value: ''}))
    const payload = {
      type: type,
      text: this.state.value
    }

    if (this.state.value.length > 0) {
      fnCreateAsync(payload,callback)
    }
  }

  handleChange = e => {
    const value = e.target.value
    this.setState(state => ({value}))
  }
}

export default ListSection
