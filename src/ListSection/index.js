import React from 'react'
import {ListOfVoteItems, ListOfDefaultItems, InputGroup} from './components'

export class ListSection extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  render() {
    const {title, isVoting=false, ...rest} = this.props
    const ComponentList = isVoting ? ListOfVoteItems : ListOfDefaultItems

    return(
      <div className='section'>
        <h2 key={`${title}-title`}>{title}</h2>
        <div className='section-list'>
          <div className='section-input-form-wrapper'>
            <form onSubmit={this.handleSubmit}>
              <InputGroup {...{
                onChange: this.handleChange,
                value: this.state.value,
                ...rest
              }} />
            </form>
          </div>
          <ComponentList {...rest} />
        </div>
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.value.length > 0) {
      this.props.fnCreateAsync(
        { type: this.props.type, text: this.state.value },
        () => this.setState(state => ({value: ''}))
      )
    }
  }

  handleChange = e => {
    const value = e.target.value
    this.setState(state => ({value}))
  }
}

export default ListSection
