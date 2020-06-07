import React from 'react';

function App() {
    return (<>
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-1@m uk-margin-bottom">
            <div className="uk-card uk-card-default uk-card-body"
              style={{ paddingTop: 20, paddingBottom: 20 }}>
              <div className="">
                <h3 className="uk-card-title uk-block@s uk-inline@m uk-margin-remove-bottom">Kurs formularzy HTML</h3>
                <a className="uk-align-right uk-margin-remove-bottom tk-social-media"
                  href="https://linkedin.com/in/tomasz-kisiel">
                  <span uk-icon="linkedin"></span>
                </a>
                <a className="uk-align-right uk-margin-remove-bottom tk-social-media"
                  href="https://github.com/TomaszKisiel">
                  <span uk-icon="github"></span>
                </a>
                <a className="uk-align-right uk-margin-remove-bottom tk-social-media"
                  href="https://tkisiel.pl">
                  <span uk-icon="home"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="uk-width-1-4@m uk-margin-bottom uk-flex-last@m">
            <div className="uk-card uk-card-default uk-card-body uk-padding-remove">
              <ul className="uk-list uk-list-striped">
                <li className="tk-nav-item">
                  <a href="#">Czym są formularze?</a>
                </li>
                <li className="tk-nav-item">
                  <a href="#">Rodzaje formularzy.</a>
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
                <li className="tk-nav-item"> <a href="#">...</a> </li>
              </ul>
            </div>
          </div>
          <div className="uk-width-3-4@m uk-margin-bottom">
            <div className="uk-card uk-card-default uk-card-body">
              <h3 className="uk-card-title">Czym są formularze?</h3>
              <p>Lorem ipsum <a href="#">dolor</a> sit amasd sad sad asd asd sa dsad sadsad kaler asete laso a masnoa srpsa alsldsa asdlopsad ad asdsbta das saryja dsadet, conasd awd sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum a masnoa srpsa alsldsa asdlopsad ad asdsbta das saryja dsadet, conasd awd sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p class="codepen"
                data-height="300"
                data-theme-id="dark"
                data-default-tab="html,result"
                data-user="tomaszkisiel"
                data-slug-hash="gOPOmXm"
                style={{ height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em', padding: '1em'}}>
                <span>
                  See the Pen <a href="https://codepen.io/tomaszkisiel/pen/gOPOmXm">
                  web-forms-example-1</a> by TomaszKisiel (<a href="https://codepen.io/tomaszkisiel">@tomaszkisiel</a>)
                  on <a href="https://codepen.io">CodePen</a>.
                </span>
              </p>
              <p>Lorem ipsum a masnoa srpsa alsldsa asdlopsad ad asdsbta das saryja dsadet, conasd awd sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
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
