import React from 'react'

const Header = ( props ) => {
  const { handleDarkModeChange } = props

  return (<>
    <header className="uk-card uk-card-default uk-card-body"
      style={{ paddingTop: 20, paddingBottom: 20 }}>
      <div className="uk-grid">
        <h3 className="uk-width-1-1 uk-width-expand@s uk-card-title uk-margin-remove-bottom">
          Kurs formularzy HTML
        </h3>
        <span className="uk-width-1-1 uk-width-auto@s"
          style={{ cursor: 'pointer' }}>
          <button className="uk-align-right uk-margin-remove tk-dark-mode-switch"
            onClick={ () => handleDarkModeChange() }>
            <span uk-icon="paint-bucket"></span>
          </button>
        </span>
      </div>
    </header>
  </>)
}

export default Header
