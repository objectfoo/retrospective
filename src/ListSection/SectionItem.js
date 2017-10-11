import React from 'react'
import {DeleteButton} from './components'
import {processVote, clampVote} from '../helpers'

export class SectionItem extends React.Component {
  constructor(props) {
    super(props)
    const newState = {
      text: props.text,
      isEditing: false
    }

    if (props.type === 'bad') {
      this.isVoting = true
      newState.value = 0
    }

    this.state = newState
  }

  render() {
    const {isEditing} = this.state
    const {
      type,
      text,
      id,
      fnDeleteAsync
    } = this.props

    return(
      <div className='section-item section-item--vote display-flex-row'>
        {this.isVoting && (
          <div className='section-item-vote'>
            <input
              data-id={id}
              data-type={type}
              type='text'
              className='input input-vote'
              value={this.state.value}
              onBlur={this.onVoteBlur}
              onChange={this.onVoteChange}
              onKeyDown={this.onVoteKeyDown} />
          </div>
        )}
        {isEditing ? (
          <div onDoubleClick={this.onTextDoubleClick} className='section-item-text flex-auto'>
            <input
              ref={this.registerRef}
              autoFocus
              type='text'
              value={this.state.text}
              onBlur={this.onInputBlur}
              onChange={this.onInputChange}
              onKeyDown={this.onInputKeyDown}
              />
          </div>
        ) : (
          <div onDoubleClick={this.onTextDoubleClick} className='section-item-text flex-auto'>
            {text}
          </div>
        )}
        <div className='section-item-delete'>
          <DeleteButton {...{fnDeleteAsync, type, id}} />
        </div>
      </div>
    )
  }

  registerRef = el => {
    if (el !== null) {
      this.InputText = el
    }
  }

  onInputKeyDown = ({keyCode}) => {
    // TODO: handle escape
    if (keyCode === 13 && this.InputText) {
      this.InputText.blur()
    }
  }

  onInputChange = ({target: {value}}) => {
    this.setState(state => ({
      text: value
    }))
  }

  onInputBlur = ({target: {value}}) => {
    const {fnUpdateAsync, type, id} = this.props
    const payload = {type, id, text: value};
    const callback = () => {
      this.setState(state => ({isEditing: !state.isEditing}))
    }

    fnUpdateAsync(payload, callback)
  }

  onTextDoubleClick = e => {
    // TODO: cache value before editing in case user hits escape
    this.setState(state => ({
      isEditing: !state.isEditing
    }))
  }

  onVoteBlur = ({target: {classList, dataset: {id, type}}}) => {
    this.props.fnUpdateAsync({type, id, vote: this.state.value})
  }

  onVoteKeyDown = ({keyCode}) => {
    if (keyCode === 40 || keyCode === 38) {
      this.setState(state => ({
        value: clampVote(state.value + ((keyCode - 39) * -1))
      }))
    }
  }

  onVoteChange = ({target: {value}}) => {
    this.setState(state => ({
      value: processVote(value)
    }))
  }
}

export default SectionItem
