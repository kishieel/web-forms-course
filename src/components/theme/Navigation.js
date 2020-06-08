import React from 'react'
import { Link } from "react-router-dom";

const Navigation = ( ) => {
  return (<>
    <nav className="uk-card uk-card-default uk-card-body"
      style={{ padding: 0, paddingTop: 15, paddingBottom: 15 }}>
      <ul className="uk-list uk-list-striped">
        <li className="tk-nav-item">
          <Link to="/lessons/1">Czym są formularze?</Link>
        </li>
        <li className="tk-nav-item">
          <Link to="/lessons/2">Rodzaje formularzy.</Link>
        </li>
        <li className="tk-nav-item">
          <a href="#">Jak układać formularze?</a>
        </li>
        <li className="tk-nav-item">
          <a href="#">Walidacja formularzy w HTML</a>
        </li>
        <li className="tk-nav-item">
          <a href="#">Walidacja formularzy w JS</a>
        </li>
        <li className="tk-nav-item">
          <a href="#">Formularze z Bootstrap</a>
        </li>
        <li className="tk-nav-item"> <a href="#">...</a> </li>
        <li className="tk-nav-item"> <a href="#">...</a> </li>
        <li className="tk-nav-item"> <a href="#">...</a> </li>
        <li className="tk-nav-item"> <a href="#">...</a> </li>
        <li className="tk-nav-item">
          <Link to="/epilogue">Słowo zakończenia</Link>
        </li>
      </ul>
    </nav>
  </>)
}

export default Navigation
