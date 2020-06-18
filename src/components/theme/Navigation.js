import React from 'react'
import { Link } from "react-router-dom";

const Navigation = ( ) => {
  return (<>
    <nav className="uk-card uk-card-default uk-card-body"
      style={{ padding: 0, paddingTop: 15, paddingBottom: 15 }}>
      <ul className="uk-list uk-list-striped">
        <li className="tk-nav-item">
          <Link to="/introduction">Instrukcja obsługi.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/what-are-forms">Czym są formularze?</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-elements">Elementy formularza.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/input-types">Rodzaje znacznika input.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-design">Jak układać formularze?</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-validation-html">Walidacja formularzy w HTML.</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lesson/form-validation-js">Walidacja formularzy w JS.</Link>
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
