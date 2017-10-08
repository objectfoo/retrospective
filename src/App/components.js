import React from 'react'

export const Header = props => {
  return(
    <header className="retro-header">
      <h1 className="retro-title">Sprint Retrospective</h1>
    </header>
  )
}

export const Footer = props => {
  return(
    <footer className='retro-footer'>
      Retrospective v{props.version}, React 16
    </footer>
  )
}
