import React from 'react'
import {NewItemEntry} from './components'
import SectionItem from './SectionItem'

export class ListSection extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.resetInputText = this.resetInputText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  render () {
    const {title, type, list, ...rest} = this.props

    return (
      <div className='section'>
        <h2 key={`${title}-title`}>{title}</h2>
        <div className='section-list'>
          <div className='section-input-form-wrapper'>
            <form onSubmit={this.handleSubmit}>
              <NewItemEntry {...{
                onChange: this.handleChange,
                value: this.state.text,
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

  resetInputText () {
    this.setState(state => ({text: ''}))
  }

  handleSubmit (e) {
    e.preventDefault()
    const {fnCreateAsync, type} = this.props
    const payload = {type, text: this.state.text}

    if (this.state.text.length > 0) {
      fnCreateAsync(payload, this.resetInputText)
    }
  }

  handleChange ({target: {value}}) {
    this.setState(state => ({text: value}))
  }
}

export default ListSection
