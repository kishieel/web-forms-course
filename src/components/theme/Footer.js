import React from 'react'
import { selectLanguageText } from '../../lang'

const Footer = ( props ) => {
  const { lang } = props

  return (<>
    <footer className="uk-card uk-card-default uk-card-body uk-padding-small">
      <span>
        { selectLanguageText( lang, "footer" ) }
      </span>
      <span className="uk-align-right">
        <a className="uk-margin-remove-bottom tk-social-media"
          href="https://linkedin.com/in/tomasz-kisiel">
          <span uk-icon="linkedin"></span>
        </a>
        <a className="uk-margin-remove-bottom tk-social-media"
          href="https://github.com/TomaszKisiel/web-forms-course"
          style={{ paddingLeft: 25 }}>
          <span uk-icon="github"></span>
        </a>
        <a className="uk-margin-remove-bottom tk-social-media"
          href="https://tkisiel.pl"
          style={{ paddingLeft: 25 }}>
          <span uk-icon="home"></span>
        </a>
      </span>
    </footer>
  </>)
}

export default Footer
