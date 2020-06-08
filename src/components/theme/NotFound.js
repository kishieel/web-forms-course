import React from 'react'
import { Link } from "react-router-dom";
import { selectLanguageText } from '../../lang'

const NotFound = ( props ) => {
  const { lang } = props
  console.log( props )

  return (<>
    <div className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">{ selectLanguageText( lang, "not-found-title" ) }</h3>
      <p>
        { selectLanguageText( lang, "not-found-what-next" ) } <br/><br/>
        <Link to="/">{ selectLanguageText( lang, "not-found-back-home" ) }</Link> <br/>
        <Link to="/deep">{ selectLanguageText( lang, "not-found-go-deep" ) }</Link><br/>
        <Link to="/real-deep"
          style={{ color: 'transparent' }}>
          { selectLanguageText( lang, "not-found-go-real-deep" ) }
        </Link>
      </p>
    </div>
  </>)
}

export default NotFound
