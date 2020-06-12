import React from 'react'
import { Link } from "react-router-dom";
import { selectLanguageText } from '../../lang'

const Navigation = ( ) => {
  return (<>
    <nav className="uk-card uk-card-default uk-card-body"
      style={{ padding: 0, paddingTop: 15, paddingBottom: 15 }}>
      <ul className="uk-list uk-list-striped">
        <li className="tk-nav-item">
          <Link to="/introduction">Instrukcja obsługi.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/1">Czym są formularze?</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/2">Rodzaje kontrolek.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/3">Jak układać formularze?</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/4">Walidacja formularzy w HTML</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/5">Walidacja formularzy w JS</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/6">Formularze z Bootstrap</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/epilogue">Słowo zakończenia</Link>
        </li>
      </ul>
    </nav>
  </>)
}

export default Navigation
