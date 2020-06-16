import React from 'react'
import { Link } from "react-router-dom";
import { selectLanguageText } from '../../lang'

const NotFound = ( ) => {
  return (<>
    <div className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Chyba zabłądziłeś przyjacielu :3</h3>
      <p>
        Co robisz ?<br/><br/>
        <Link to="/">Zabierz mnie do normalności..</Link> <br/>
        <Link to="/game/deep">Wchodzę w głąb kurliczej nory!</Link><br/>
        <Link to="/game/real-deep" style={{ color: 'transparent' }}>Pokaż mi prawdę!</Link>
      </p>
    </div>
  </>)
}

export default NotFound
