import React from 'react'
import PageSwitcher from '../theme/PageSwitcher'
import CodePen from '../theme/CodePen'

const FormValidationJs = ( ) => {
  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Walidacja formularzy w JS</h3>
      <p></p>
      <PageSwitcher previousURL="/lesson/form-validation-html" previousText="Walidacja formularzy w HTML?"
        nextURL="/lesson/bootstrap-forms" nextText="Formularze z Bootstrap"/>
    </article>
  </>)
}

export default FormValidationJs
