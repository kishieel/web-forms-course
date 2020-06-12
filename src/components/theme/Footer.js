import React from 'react'
import { selectLanguageText } from '../../lang'

const Footer = ( ) => {
  return (<>
    <footer className="uk-card uk-card-default uk-card-body uk-padding-medium"
      style={{ paddingTop: 20, paddingBottom: 20 }}>
      <span>Projekt i wykonanie : Tomasz Kisiel 2020</span>
      <span className="uk-align-right">
        <a className="uk-margin-remove-bottom tk-social-media"
          href="https://tkisiel.pl">
          <span uk-icon="home"></span>
        </a>
        <a className="uk-margin-remove-bottom tk-social-media"
          href="https://github.com/TomaszKisiel/web-forms-course"
          style={{ paddingLeft: 25 }}>
          <span uk-icon="github"></span>
        </a>
        <a className="uk-margin-remove-bottom tk-social-media"
          href="https://linkedin.com/in/tomasz-kisiel"
          style={{ paddingLeft: 25 }}>
          <span uk-icon="linkedin"></span>
        </a>
      </span>
    </footer>
  </>)
}

export default Footer
