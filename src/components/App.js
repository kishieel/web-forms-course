import React, { useState, useEffect } from 'react';
import Header from './theme/Header'
import Navigation from './theme/Navigation'
import Footer from './theme/Footer'
import NotFound from './theme/NotFound'
import Epilogue from './lessons/Epilogue'
import FirstLesson from './lessons/FirstLesson'
import SecondLesson from './lessons/SecondLesson'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    const [ darkMode, setDarkMode ] = useState( localStorage.getItem('darkMode') == 'true' || false )

    const handleDarkModeChange = ( ) => {
      setDarkMode( ! darkMode  )
    }

    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [ darkMode ]);

    return (<>
      <Router>
        <div className={ darkMode === true ? 'tk-dark-mode' : '' }
          style={{ paddingTop: 30, paddingBottom: 30 }}>
          <div className="uk-container">
            <div className="uk-grid">
              <div className="uk-width-1-1@m uk-margin-bottom">
                <Header handleDarkModeChange={ handleDarkModeChange } />
              </div>
              <div className="uk-width-1-4@m uk-margin-bottom uk-flex-last@m">
                <Navigation />
              </div>
              <div className="uk-width-3-4@m uk-margin-bottom">
                <Switch>
                  <Route exact={true} path="/">
                    <FirstLesson />
                  </Route>
                  <Route path="/lessons/1">
                    <FirstLesson />
                  </Route>
                  <Route path="/lessons/2">
                    <SecondLesson />
                  </Route>
                  <Route path="/epilogue">
                    <Epilogue />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </div>
            <div className="uk-width-1-1@m uk-margin-bottom">
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>)
}

//style={{ height: 265, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em', padding: '1em'}}

// <a href="#" className="uk-position-fixed uk-position-bottom-center" style={{ width: 40, height: 40, borderRadius: 20, margin: 20, padding: 11, paddingTop: 14, background: '#aaa', color: '#fff' }} uk-totop="" uk-scroll=""></a>

/*
<div className="uk-grid">
<div className="uk-width-4-5@m uk-push-1-2">
  <div className="uk-card uk-card-default uk-card-body">
    adsad
  </div>
</div>
<div className="uk-width-1-5@m uk-pull-1-2 uk-row-first">
  <div className="uk-card uk-card-default uk-card-body">
  <h3 className="uk-card-title">Default</h3>
  <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
</div>
*/

export default App;
