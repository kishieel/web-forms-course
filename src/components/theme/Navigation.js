import React from 'react'
import { Link } from "react-router-dom";
import { selectLanguageText } from '../../lang'

const Navigation = ( props ) => {
  const { lang } = props

  return (<>
    <nav className="uk-card uk-card-default uk-card-body"
      style={{ padding: 0, paddingTop: 15, paddingBottom: 15 }}>
      <ul className="uk-list uk-list-striped">
        <li className="tk-nav-item">
          <Link to="/introduction">{ selectLanguageText( lang, "introduction-title" ) }</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lessons/1">{ selectLanguageText( lang, "lesson-1-title" ) }</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lessons/2">{ selectLanguageText( lang, "lesson-2-title" ) }</Link>
        </li>
        <li className="tk-nav-item">
          <a href="#">{ selectLanguageText( lang, "lesson-3-title" ) }</a>
        </li>
        <li className="tk-nav-item">
          <a href="#">{ selectLanguageText( lang, "lesson-4-title" ) }</a>
        </li>
        <li className="tk-nav-item">
          <a href="#">{ selectLanguageText( lang, "lesson-5-title" ) }</a>
        </li>
        <li className="tk-nav-item">
          <a href="#">{ selectLanguageText( lang, "lesson-6-title" ) }</a>
        </li>
        <li className="tk-nav-item">
          <Link to="/epilogue">{ selectLanguageText( lang, "epilogue-title" ) }</Link>
        </li>
      </ul>
    </nav>
  </>)
}

export default Navigation
