import React from 'react'
import { selectLanguageText } from '../../lang'

const ThirdLesson = ( props ) => {
  const { lang } = props

  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">{ selectLanguageText( lang, "lesson-5-title") }</h3>
      <p></p>
    </article>
  </>)
}

export default ThirdLesson
