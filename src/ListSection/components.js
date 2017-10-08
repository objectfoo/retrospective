import React from 'react'
import {newListRenderer} from '../helpers'

const DeleteButton = ({type, id, fnDeleteAsync}) => {
  return(
    <div
      className='icn-delete flex-initial'
      data-id={id}
      data-type={type}
      onClick={fnDeleteAsync}>
      &times;
    </div>
  )
}

const SectionItemDefault = ({text, ...rest}) => (
  <div className='section-item section-item--default display-flex-row'>
    <div className='section-item-text flex-auto'>
      {text}
    </div>
    <div className='section-item-delete'>
      <DeleteButton {...rest} />
    </div>
  </div>
)

const SectionItemVote = ({text, ...rest}) => (
  <div className='section-item section-item--vote display-flex-row'>
    <div className='section-item-vote'>
      <input type='text' className='input input-vote' defaultValue={0}/>
    </div>
    <div className='section-item-text flex-auto'>
      {text}
    </div>
    <div className='section-item-delete'>
      <DeleteButton {...rest} />
    </div>
  </div>
)

export const ListOfDefaultItems = newListRenderer(SectionItemDefault)
ListOfDefaultItems.displayName = 'ListOfDefaultItems'

export const ListOfVoteItems = newListRenderer(SectionItemVote)
ListOfVoteItems.displayName = 'ListOfVoteItems'

export const InputGroup = ({
  id,
  placeholder,
  onChange,
  value
}) => {
  return(
    <label htmlFor={id}>
      <input
        id={id}
        data-id={id}
        className='input input-main'
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        value={value} />
    </label>
  )
}