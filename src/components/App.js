import React, { useState, useEffect } from 'react';
import Header from './theme/Header'
import Navigation from './theme/Navigation'
import Footer from './theme/Footer'
import NotFound from './theme/NotFound'
import Introduction from './lessons/Introduction'
import Epilogue from './lessons/Epilogue'
import FirstLesson from './lessons/FirstLesson'
import SecondLesson from './lessons/SecondLesson'
import ThirdLesson from './lessons/ThirdLesson'
import FourthLesson from './lessons/FourthLesson'
import FifthLesson from './lessons/FifthLesson'
import SixthLesson from './lessons/SixthLesson'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  const [ darkMode, setDarkMode ] = useState( localStorage.getItem('darkMode') !== "false" )
  const [ language, setLanguage ] = useState( localStorage.getItem('language') || "ENG" )

  const handleDarkModeChange = ( ) => {
    console.log( darkMode, localStorage.getItem('darkMode') )
    setDarkMode( ! darkMode  )
  }

  const handleLanguageChange = ( ) => {
    setLanguage( language === "ENG" ? "PLN" : "ENG"  )
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('language', language);
  }, [ darkMode, language ]);

  return (<>
    <Router>
      <div className={ darkMode === true ? 'tk-dark-mode' : '' }
        style={{ paddingTop: 30, paddingBottom: 30, minHeight: '100vh', boxSizing: "border-box" }}>
        <div className="uk-container">
          <div className="uk-grid uk-grid-match">
            <div className="uk-width-1-1@m uk-margin-bottom">
              <Header handleDarkModeChange={ handleDarkModeChange } handleLanguageChange={ handleLanguageChange} lang={ language }/>
            </div>
            <div className="uk-width-1-4@m uk-margin-bottom uk-flex-last@m">
              <Navigation lang={ language }/>
            </div>
            <div className="uk-width-3-4@m uk-margin-bottom">
              <Switch>
                <Route exact={true} path="/">
                  <Introduction lang={ language }/>
                </Route>
                <Route path="/introduction">
                  <Introduction lang={ language }/>
                </Route>

                <Route path="/lesson/1">
                  <FirstLesson lang={ language }/>
                </Route>
                <Route path="/lesson/2">
                  <SecondLesson lang={ language }/>
                </Route>
                <Route path="/lesson/3">
                  <ThirdLesson lang={ language }/>
                </Route>
                <Route path="/lesson/4">
                  <FourthLesson lang={ language }/>
                </Route>
                <Route path="/lesson/5">
                  <FifthLesson lang={ language }/>
                </Route>
                <Route path="/lesson/6">
                  <SixthLesson lang={ language }/>
                </Route>
                <Route path="/epilogue">
                  <Epilogue lang={ language }/>
                </Route>
                <Route path="*">
                  <NotFound lang={ language }/>
                </Route>
              </Switch>
            </div>
          </div>
          <div className="uk-width-1-1@m uk-margin-bottom">
            <Footer lang={ language }/>
          </div>
        </div>
      </div>
    </Router>
  </>)
}

export default App;
