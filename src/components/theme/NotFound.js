import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (<>
    <div className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Chyba zabłądziłeś przyjacielu :3</h3>
      <p>
        Co robisz ? <br/><br/>
        <Link to="/">Zabierz mnie do normalności..</Link> <br/>
        <Link to="/deep">Wchodzę w głąb kurliczej nory!</Link><br/>
        <Link to="/real-deep"
          style={{ color: 'transparent' }}>
          Wchodzę w głąb kurliczej nory!
        </Link>
      </p>
    </div>
  </>)
}

export default NotFound
