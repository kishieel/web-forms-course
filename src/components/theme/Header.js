import React from 'react'
import { selectLanguageText } from '../../lang'

const Header = ( props ) => {
  const { lang, handleDarkModeChange, handleLanguageChange } = props

  return (<>
    <header className="uk-card uk-card-default uk-card-body"
      style={{ paddingTop: 20, paddingBottom: 20 }}>
      <div className="uk-grid">
        <h3 className="uk-width-1-1 uk-width-expand@s uk-card-title uk-margin-remove-bottom">
          { selectLanguageText( lang, "header" ) }
        </h3>
        <span className="uk-width-1-1 uk-width-auto@s"
          style={{ cursor: 'pointer' }}>
          <button className="uk-align-right tk-theme-button"
            onClick={ () => handleLanguageChange() }
            style={{ margin: 0, marginTop: 10, marginLeft: 15 }}>
            { lang }
          </button>
          <button className="uk-align-right tk-theme-button"
            onClick={ () => handleDarkModeChange() }
            style={{ margin: 0, marginTop: 5 }}>
            <span uk-icon="paint-bucket"></span>
          </button>
        </span>
      </div>
    </header>
  </>)
}

export default Header
