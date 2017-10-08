import React from 'react'

export const newListRenderer = Component => ({list, ...rest}) => {
  return list.allIds
    .map(id => <Component key={id} {...list.byId[id]} {...rest} />)
}

export const makeProps = base => ctx => {
  return {
    list: ctx.state[base.type],
    ...base
  }
}
