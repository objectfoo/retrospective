export const makeProps = base => ctx => {
  return {
    list: ctx.state[base.type],
    ...base
  }
}

export const clampVote = value => Math.min(999, Math.max(0, value))

const santizeVoteNumber = (v = '') => parseInt(v.replace(/[^0-9]/, ''), 10) || 0

export const processVote = vote => clampVote(santizeVoteNumber(vote))
