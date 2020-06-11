import React from 'react'
import { selectLanguageText } from '../../lang'

const SecondLesson = ( props ) => {
  const { lang } = props

  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">{ selectLanguageText( lang, "lesson-2-title") }</h3>
      <p>
        { selectLanguageText( lang, "lesson-2-paragraph-1-1") }
        <span className="tk-code"> &lt;input&gt; </span>
        { selectLanguageText( lang, "lesson-2-paragraph-1-2") }
        <span className="tk-code"> type</span>.
      </p>
      <p>
        { selectLanguageText( lang, "lesson-2-paragraph-2-1") }
        <ul className="uk-list uk-list-hyphen">
          <li>
            <span className="tk-code">text</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-2") }
            <form className="uk-overflow-hidden">
              <label for="textInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-3") }
              </label>
              <input id="textInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="text" style={{ maxWidth: '100%' }} name="fname" autofocus/>
            </form>
          </li>
          <li>
            <span className="tk-code">number</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-4") }
            <form className="uk-overflow-hidden">
              <label for="numberInput">
              { selectLanguageText( lang, "lesson-2-paragraph-2-5") }
              </label>
              <input id="numberInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="number" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">email</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-6") }
            <form className="uk-overflow-hidden">
              <label for="emailInput">
              { selectLanguageText( lang, "lesson-2-paragraph-2-7") }
              </label>
              <input id="emailInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="email" required/>
              <input id="emailSubmitInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="submit" style={{ paddingLeft: 10, paddingRight: 10, maxWidth: '100%' }} value="Sprawdź!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">password</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-8") }
            <br/>
            <form className="uk-overflow-hidden">
              <label for="passwordInput">Twoje słowa zostaną ukryte przed potencjalnymi podglądaczami<span className="tk-pervert"> - jak ja</span>. </label>
              <input id="passwordInput" className="tk-input uk-align-right" type="password" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">radio</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-radio-desc-1" ) }
            <br/>
            <form className="uk-overflow-hidden">
              { selectLanguageText( lang, "lesson-2-paragraph-2-radio-desc-2-1" ) }
              <span className="tk-pervert">
                { selectLanguageText( lang, "lesson-2-paragraph-2-radio-desc-2-2" ) }
              </span>: <br/>
              <input id="radioMaleInput" className="uk-radio" name="gender" type="radio" /><label for="radioMaleInput" style={{ paddingLeft: 10 }} >
                { selectLanguageText( lang, "lesson-2-paragraph-2-radio-opt-1" ) }
              </label><br/>
              <input id="radioFemaleInput" className="uk-radio" name="gender" type="radio" /><label for="radioFemaleInput" style={{ paddingLeft: 10 }} >
                { selectLanguageText( lang, "lesson-2-paragraph-2-radio-opt-2" ) }
              </label><br/>
              <input id="radioOtherInput" className="uk-radio" name="gender" type="radio" /><label for="radioOtherInput" style={{ paddingLeft: 10 }} >
                { selectLanguageText( lang, "lesson-2-paragraph-2-radio-opt-3-1" ) }
                <span className="tk-pervert">
                  { selectLanguageText( lang, "lesson-2-paragraph-2-radio-opt-3-2" ) }
                </span>&nbsp;:3
              </label><br/>
            </form>
          </li>
          <li>
            <span className="tk-code">checkbox</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-checkbox-1" ) }
            <br/>
            <form className="uk-overflow-hidden">
              { selectLanguageText( lang, "lesson-2-paragraph-2-checkbox-2" ) }
              <input id="checkboxAppleInput" className="uk-checkbox" name="apple" type="checkbox" /><label for="radioMaleInput" style={{ paddingLeft: 10 }} >
                { selectLanguageText( lang, "lesson-2-paragraph-2-checkbox-opt-1" ) }
              </label><br/>
              <input id="checkboxCarrotInput" className="uk-checkbox" name="carrot" type="checkbox" /><label for="radioFemaleInput" style={{ paddingLeft: 10 }} >
                { selectLanguageText( lang, "lesson-2-paragraph-2-checkbox-opt-2" ) }
              </label><br/>
              <input id="checkboxParslayInput" className="uk-checkbox" name="parsley" type="checkbox" /><label for="radioOtherInput" style={{ paddingLeft: 10 }} >
                { selectLanguageText( lang, "lesson-2-paragraph-2-checkbox-opt-3" ) }
              </label><br/>
            </form>
          </li>
          <li>
            <span className="tk-code">button</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-button-1" ) }
            <form className="uk-overflow-hidden">
              { selectLanguageText( lang, "lesson-2-paragraph-2-button-2" ) }
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="button" style={{ maxWidth: '100%', paddingLeft: 10, paddingRight: 10 }} value={ selectLanguageText( lang, "lesson-2-paragraph-2-button-3" ) }/>
            </form>
          </li>
          <li>
            <span className="tk-code">submit</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-submit-1" ) }
            <br/>
            <form className="uk-overflow-hidden">
              <span>{ selectLanguageText( lang, "lesson-2-paragraph-2-submit-2" ) }</span>
              <input className="tk-input uk-align-right uk-margin-remove-bottom"
                type="submit"
                style={{ maxWidth: '100%', paddingLeft: 10, paddingRight: 10 }}
                value={ selectLanguageText( lang, "lesson-2-paragraph-2-submit-3" ) }/>
            </form>
          </li>
          <li>
            <span className="tk-code">reset</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-reset-1" ) }
            <form className="uk-overflow-hidden">
              <span>{ selectLanguageText( lang, "lesson-2-paragraph-2-reset-2" ) }</span>
              <input className="tk-input uk-align-right uk-margin-remove-bottom"
                type="text"
                placeholder={ selectLanguageText( lang, "lesson-2-paragraph-2-reset-3" ) }/>
              <input className="tk-input uk-align-right uk-margin-remove-bottom"
                type="reset"
                style={{ maxWidth: '100%', paddingLeft: 10, paddingRight: 10 }}
                value={ selectLanguageText( lang, "lesson-2-paragraph-2-reset-4" ) }/>
            </form>
          </li>
          <li>
            <span className="tk-code">color</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-color" ) }
            <form className="uk-overflow-hidden">
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="color" style={{ padding: 0, maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">date</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-date-1" ) }
            <form className="uk-overflow-hidden">
              <label for="dateInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-date-2" ) }
              </label>
              <input id="dateInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="date" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">time</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-time-1" ) }
            <form className="uk-overflow-hidden">
              <label for="timeInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-time-2" ) }
              </label>
              <input id="timeInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="time" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">datetime-local</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-date-time-1" ) }
            <form className="uk-overflow-hidden">
              <label for="datetimeInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-date-time-2" ) }
              </label>
              <input id="datetimeInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="datetime-local" style={{ maxWidth: '100%' }} />
            </form>
          </li>
          <li>
            <span className="tk-code">month</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-month-1" ) }
            <form className="uk-overflow-hidden">
              <label for="monthInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-month-1" ) }
              </label>
              <input id="monthInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="month" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">week</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-week-1" ) }
            <form className="uk-overflow-hidden">
              <label for="weekInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-week-2" ) }
              </label>
              <input id="weekInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="week" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">file</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-file" ) }
          </li>
          <li>
            <span className="tk-code">range</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-range-1" ) }
            <form className="uk-overflow-hidden">
              <label for="weekInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-range-2" ) }
                <span className="tk-pervert">
                  { selectLanguageText( lang, "lesson-2-paragraph-2-range-3" ) }
                </span>?</label>
              <input id="rangeInput" className="uk-range uk-align-right uk-margin-remove-bottom" style={{ width: 200, maxWidth: '100%', paddingTop: 10, paddingBottom: 10 }} type="range" />
            </form>
          </li>
          <li>
            <span className="tk-code">search</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-search" ) }
          </li>
          <li>
            <span className="tk-code">tel</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-tel" ) }
          </li>
          <li>
            <span className="tk-code">url</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-url-1" ) }
            <form className="uk-overflow-hidden" onSubmit={ (e) => { e.preventDefault(); return false; } }>
              <label for="urlInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-url-2" ) }
                <span className="tk-pervert">
                  { selectLanguageText( lang, "lesson-2-paragraph-2-url-3" ) }
                </span>.
              </label>
              <input id="urlInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="url" required/>
              <input id="urlSubmitInput"
                className="tk-input uk-align-right uk-margin-remove-bottom"
                type="submit"
                style={{ paddingLeft: 10, paddingRight: 10, maxWidth: '100%' }}
                value={ selectLanguageText( lang, "lesson-2-paragraph-2-url-4" ) } />
            </form>
          </li>
          <li>
            <span className="tk-code">hidden</span> &ndash;
            { selectLanguageText( lang, "lesson-2-paragraph-2-hidden-1" ) }
            <form className="uk-overflow-hidden">
              <label for="hiddenInput">
                { selectLanguageText( lang, "lesson-2-paragraph-2-hidden-2" ) }
              </label>
              <input id="hiddenInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="hidden"/>
            </form>
          </li>
        </ul>
      </p>
      <p>
        { selectLanguageText( lang, "lesson-2-paragraph-3-1" ) }
        <span className="tk-code">type</span>
        { selectLanguageText( lang, "lesson-2-paragraph-3-2" ) }
        <span className="tk-code">&lt;input&gt;</span>.
      </p>
      <p>
        Innymi ciekawymi<span className="tk-pervert">, jak spływ wody w klozecie,</span> atrybutami są:
        <ul className="uk-list uk-list-hyphen">
          <li>
            <span className="tk-code">rideonly</span> &ndash; sprawia, że dane zawarte w określonym polu są tylko do odczytu i nie można ich edytować.
          </li>
          <li>
            <span className="tk-code">disabled</span> &ndash; sprawia, że nie możemy modyfikować ani nawet nacisnąć na kontrolke. Wartości z zablokowanych kontrolek nie są przesyłane w formularzu.
          </li>
          <li>
            <span className="tk-code">size</span> &ndash; ustawia szerokość kontrolki określoną w znakach. Współpracuje jedynie z typami: <span className="tk-code">text</span>, <span className="tk-code">email</span>, <span className="tk-code">password</span>, <span className="tk-code">search</span>, <span className="tk-code">tel</span>, <span className="tk-code">url</span>.
          </li>
          <li>
            <span className="tk-code">maxlength</span> &ndash; określa maksymalną liczbę znaków jakie mogą zostać wprowadzone w danej kontrolce.
          </li>
          <li>
            <span className="tk-code">min</span>, <span className="tk-code">max</span> &ndash; definiują minimalną i maksymalną wartość jakie mogą zostać wprowadzone. Współpracuje jedynie z typami: <span className="tk-code">number</span>, <span className="tk-code">date</span>, <span className="tk-code">time</span>, <span className="tk-code">datetime-local</span>, <span className="tk-code">month</span>, <span className="tk-code">week</span>, <span className="tk-code">range</span>.
          </li>
          <li>
            <span className="tk-code">multiple</span> &ndash; umożliwia wprowadzenie więcej niż tylko jednej wartości. Współpracuje jedynie z typami: <span className="tk-code">email</span>, <span className="tk-code">file</span>.
          </li>
          <li>
            <span className="tk-code">pattern</span> &ndash; definiuje <a className="uk-link" href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp">wyrażenie regularne</a>, którego spełnienie jest wymagane w celu przesłania formularza.
          </li>
          <li>
            <span className="tk-code">placeholder</span> &ndash; umożliwia wprowadzenie podpowiedzi dla użytkownika, która jest widoczna dopóki uzytkownik nie wprowadzi wartości w określonym polu.
          </li>
          <li>
            <span className="tk-code">required</span> &ndash; wymaga wprowadzenia wartości w określonym polu, w przeciwnym wypadku formularz nie zostanie przesłany.
          </li>
          <li>
            <span className="tk-code">step</span> &ndash; określa minimalną różnicę o jaką może zmieniać się wartość kontrolki. Współpracuje jedynie z typami: <span className="tk-code">number</span>, <span className="tk-code">date</span>, <span className="tk-code">time</span>, <span className="tk-code">datetime-local</span>, <span className="tk-code">month</span>, <span className="tk-code">week</span>, <span className="tk-code">range</span>.
          </li>
          <li>
            <span className="tk-code">autofocus</span> &ndash; automatycznie zaznacza określone pole gdy strona zostaje przeładowana. Tego atrybutu powinniśmy użyć tylko raz.
          </li>
          <li>
            <span className="tk-code">autocomplete</span> &ndash;
          </li>
        </ul>
      </p>
      <p>
        Przykładowy formularz wykorzystujący większość z nowo-poznanych kontrolek możesz zobaczyć poniżej. Zachęcam do zabawy i samodzielnego stworzenia dowolnego formularza.
      </p>
      <iframe
        height="300"
        scrolling="no"
        title="web-forms-lesson-2"
        src="https://codepen.io/tomaszkisiel/embed/WNrrKqW?height=265&theme-id=dark&default-tab=html,result"
        frameBorder="no"
        allowtransparency="true"
        allowFullScreen={true}
        style={{ width: '100%' }}>
        <div style={{ height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em', padding: '1em' }}>
          See the Pen <a href='https://codepen.io/tomaszkisiel/pen/gOPOmXm'>web-forms-lesson-2</a> by TomaszKisiel
          (<a href='https://codepen.io/tomaszkisiel'>@tomaszkisiel</a>) on <a href='https://codepen.io'>CodePen</a>.
        </div>
      </iframe>
      <div className="uk-alert-primary" uk-alert="">
        <h3>ZADANIE BOJOWE !!!</h3>
        <p>Korzystając ze zdobytych w tej lekcji informacji spróbuj stworzyć formularz wykorzystujący wszyskie kontrolki, oraz ich atrybuty. Dodatkowe informacje na temat znacznika <span className="tk-code">&lt;input&gt;</span> możesz znaleźć <a className="uk-link" href="https://www.w3schools.com/html/html_form_input_types.asp">tutaj</a>. Bądź kreatywny - powodzenia!</p>
      </div>
    </article>
  </>)
}

export default SecondLesson
