import React, { useState, useEffect } from 'react';
import Header from './theme/Header'
import Navigation from './theme/Navigation'
import Footer from './theme/Footer'
import NotFound from './theme/NotFound'
import Introduction from './lessons/Introduction'
import Epilogue from './lessons/Epilogue'
import WhatAreForms from './lessons/WhatAreForms'
import FormElements from './lessons/FormElements'
import InputTypes from './lessons/InputTypes'
import FormDesign from './lessons/FormDesign'
import FormValidationHtml from './lessons/FormValidationHtml'
import FormValidationJs from './lessons/FormValidationJs'
import DeepHole from './game/DeepHole'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const [ darkMode, setDarkMode ] = useState( localStorage.getItem('darkMode') !== "false" )

  const handleDarkModeChange = ( ) => {
    setDarkMode( ! darkMode  )
  }

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [ darkMode ])

  return (<>
    <Router>
      <div className={ darkMode === true ? 'tk-dark-mode' : '' }
        style={{ paddingTop: 30, paddingBottom: 30, minHeight: '100vh', boxSizing: "border-box" }}>
        <div className="uk-container tk-container">
          <div className="uk-grid uk-grid-match">
            <div className="uk-width-1-1@m uk-margin-bottom">
              <Header handleDarkModeChange={ handleDarkModeChange } />
            </div>
            <div className="uk-width-1-4@m uk-margin-bottom uk-flex-last@m">
              <Navigation />
            </div>
            <div className="uk-width-3-4@m uk-margin-bottom">
              <Switch>
                <Route exact={true} path="/">
                  <Introduction />
                </Route>
                <Route path="/introduction">
                  <Introduction />
                </Route>
                <Route path="/lesson/what-are-forms">
                  <WhatAreForms />
                </Route>
                <Route path="/lesson/form-elements">
                  <FormElements />
                </Route>
                <Route path="/lesson/input-types">
                  <InputTypes />
                </Route>
                <Route path="/lesson/form-design">
                  <FormDesign />
                </Route>
                <Route path="/lesson/form-validation-html">
                  <FormValidationHtml />
                </Route>
                <Route path="/lesson/form-validation-js">
                  <FormValidationJs />
                </Route>
                <Route path="/epilogue">
                  <Epilogue />
                </Route>
                <Route path="/game/deep">
                  <DeepHole />
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

export default App;
