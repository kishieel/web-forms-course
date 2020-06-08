import React from 'react'

const Footer = ( ) => {
  return (<>
    <footer className="uk-card uk-card-default uk-card-body uk-padding-small">
      <span>
        Projekt i wykonanie : Tomasz Kisiel 2020
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
