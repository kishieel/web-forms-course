import React from 'react'
import { selectLanguageText } from '../../lang'

const FirstLesson = ( props ) => {
  const { lang } = props

  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">{ selectLanguageText( lang, "lesson-1-title") }</h3>
      <p>{ selectLanguageText( lang, "lesson-1-paragraph-1" ) }</p>
      <div>{ selectLanguageText( lang, "lesson-1-paragraph-2" ) }</div>
      <p>{ selectLanguageText( lang, "lesson-1-paragraph-3" ) }</p>
      <div className="uk-alert-primary" uk-alert="">{ selectLanguageText( lang, "lesson-1-paragraph-4" ) }</div>
      <p>{ selectLanguageText( lang, "lesson-1-paragraph-5" ) }</p>
      <iframe
        height="300"
        scrolling="no"
        title="web-forms-example-1"
        src="https://codepen.io/tomaszkisiel/embed/gOPOmXm?height=265&theme-id=dark&default-tab=html,result"
        frameBorder="no"
        allowtransparency="true"
        allowFullScreen={true}
        style={{ width: '100%' }}>
        <div style={{ height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em', padding: '1em' }}>
          See the Pen <a href='https://codepen.io/tomaszkisiel/pen/gOPOmXm'>web-forms-example-1</a> by TomaszKisiel
          (<a href='https://codepen.io/tomaszkisiel'>@tomaszkisiel</a>) on <a href='https://codepen.io'>CodePen</a>.
        </div>
      </iframe>
      <p>{ selectLanguageText( lang, "lesson-1-paragraph-6" ) }</p>
      <div className="uk-alert-primary" uk-alert="">
        <h3>ZADANIE BOJOWE !!!</h3>
        <p>Przed przeczytaniem następnego rozdziału, przypomnij sobie z jakimi formularzami spotkałeś się do tej pory w internecie oraz jakie dane można było w nich wprawdzać - powodzenia!</p>
      </div>
    </article>
  </>)
}

export default FirstLesson
