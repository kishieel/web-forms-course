import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = ( ) => {
  return (<>
    <nav className="uk-card uk-card-default uk-card-body"
      style={{ padding: 0, paddingTop: 15, paddingBottom: 15 }}>
      <ul className="uk-list uk-list-striped">
        <li className="tk-nav-item">
          <Link to="/introduction#content">Instrukcja obsługi.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/what-are-forms#content">Czym są formularze?</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-elements#content">Elementy formularza.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/input-types#content">Rodzaje znacznika input.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-design#content">Jak układać formularze?</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-validation-html#content">Walidacja formularzy w HTML.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-validation-js#content">Walidacja formularzy w JS.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/7">Formularze z Bootstrap.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/epilogue">Słowo zakończenia.</Link>
        </li>
      </ul>
    </nav>
  </>)
}

export default Navigation
