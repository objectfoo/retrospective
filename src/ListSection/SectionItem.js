import React from 'react'
import {DeleteButton} from './components'
import {processVote, clampVote} from '../helpers'



export class SectionItem extends React.Component {
  constructor(props) {
    super(props)
    const newState = {
      value: props.text
    }

    if (props.type === 'bad') {
      this.isVoting = true
      newState.value = 0
    }

    this.state = newState
  }

  render() {
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
        <div className='section-item-text flex-auto'>
          {text}
        </div>
        <div className='section-item-delete'>
          <DeleteButton {...{fnDeleteAsync, type, id}} />
        </div>
      </div>
    )
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
