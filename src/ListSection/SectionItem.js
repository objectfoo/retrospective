import React from 'react'
import {DeleteButton} from './components'
import {processVote, clampVote} from '../helpers'

export class SectionItem extends React.Component {
  constructor (props) {
    super(props)
    const newState = {
      text: props.text,
      isEditing: false,
      cachedText: null
    }

    if (props.type === 'bad') {
      this.isVoting = true
      newState.value = 0
    }

    this.state = newState
    this.registerRef = this.registerRef.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.toggleIsEditing = this.toggleIsEditing.bind(this)
    this.onInputBlur = this.onInputBlur.bind(this)
    this.onInputKeyDown = this.onInputKeyDown.bind(this)
    this.onInputKeyDown = this.onInputKeyDown.bind(this)
    this.onTextDoubleClick = this.onTextDoubleClick.bind(this)
    this.onVoteBlur = this.onVoteBlur.bind(this)
    this.onVoteKeyDown = this.onVoteKeyDown.bind(this)
    this.onVoteChange = this.onVoteChange.bind(this)
  }

  render () {
    const {isVoting} = this
    const {isEditing} = this.state
    const {type, text, id, fnDeleteAsync} = this.props

    return (
      <div className='section-item section-item--vote display-flex-row'>
        {isVoting && (
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

  registerRef (el) {
    if (el !== null) {
      this.InputText = el
    }
  }

  toggleIsEditing () {
    this.setState(state => ({isEditing: !state.isEditing}))
  }

  onInputKeyDown ({keyCode}) {
    if (this.InputText) {
      if (keyCode === 13) {
        this.InputText.blur()
      } else if (keyCode === 27 && this.state.cachedText) {
        this.setState(state => ({
          text: state.cachedText,
          cachedText: null
        }), () => {
          this.InputText.blur()
        })
      }
    }
  }

  onInputChange ({target: {value}}) {
    this.setState(state => ({text: value}))
  }

  onInputBlur ({target: {value}}) {
    const {fnUpdateAsync, type, id} = this.props
    const payload = {type, id, text: value}
    fnUpdateAsync(payload, this.toggleIsEditing)
  }

  onTextDoubleClick (e) {
    this.setState(state => {
      const newState = {...state}

      if (state.isEditing) {
        newState.isEditing = false
      } else {
        newState.isEditing = true
        newState.cachedText = state.text
      }
      return newState
    })
  }

  onVoteBlur ({target: {classList, dataset: {id, type}}}) {
    this.props.fnUpdateAsync({type, id, vote: this.state.value})
  }

  onVoteKeyDown ({keyCode}) {
    if (keyCode === 40 || keyCode === 38) {
      this.setState(state => ({
        value: clampVote(state.value + ((keyCode - 39) * -1))
      }))
    }
  }

  onVoteChange ({target: {value}}) {
    this.setState(state => ({
      value: processVote(value)
    }))
  }
}

export default SectionItem
