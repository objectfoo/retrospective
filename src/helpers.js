import React from 'react'

export const makeProps = base => ctx => {
  return {
    list: ctx.state[base.type],
    ...base
  }
}
