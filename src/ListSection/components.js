import React from 'react'

export const DeleteButton = ({type, id, fnDeleteAsync}) => {
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