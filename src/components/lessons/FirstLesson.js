import React from 'react'
import { selectLanguageText } from '../../lang'

const FirstLesson = ( props ) => {
  const { lang } = props

  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Czym są formularze?</h3>
      <p>Najprościej mówiąc formularz <span className="tk-code">&lt;form&gt;</span> to nic innego jak kontener na kontrolki, które umozliwiają pobieranie danych od uzytkownika. Następnie po zatwierdzeniu formularza za pomocą zdarzenia <span className="tk-code">submit</span> mogą one zostać przesłane pod podany adres lub przetworzone przez skryp JS.</p>
      <div>
        Najistotniejszymi atrybutami formularza są :
        <ul className="uk-list uk-list-hyphen uk-list-collapse">
          <li>
            <span className="tk-code">action</span> &ndash; określa adres URL pod który należy przesłać formularz (&nbsp;domyślnie : strona wysyłająca&nbsp;).
          </li>
          <li>
            <span className="tk-code">method</span> &ndash; określa metodę HTTP używaną podczas przesyłania formularza (&nbsp;domyślnie: GET&nbsp;).
          </li>
        </ul>
      </div>
      <p>Aby poznać szczegołowo wszystkie atrybuty formularza możesz odwiedzić stronę <a href="https://www.w3schools.com/html/html_forms.asp">W3C School</a>, którą z całego serduszka polecam na początek nauki&nbsp;:)</p>
      <div className="uk-alert-primary" uk-alert="">
        <h3>Ciekawostka!</h3>
        <p>Czy wiedziałeś, że za pomocą formularza możesz wywołać klienta poczty na komputerze użytkownika? - ja nie. Aby to osiągnąć w atrybucie <span className="tk-code">action</span> wystarczy skorzystać z polecenia <span className="tk-code">mailto</span>, a następnie - po dwukropku - podać adres e-mail, na który ma zostać wysłana treść formularza.</p>
      </div>
      <p>Dla wstępnego zrozumienia co mam na myśli mówiąc "kontener na kontrolki" możesz pobawić się poniższym przykładem: <span className="tk-pervert">Wiem że lubisz takie zabawy&nbsp;:3</span></p>
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
      <p>Jak sam widzisz formularz nie jest czymś nazbyt ciekawym. Zdecydowanie ciekawsze są jego różnorakie kontrolki ukryte pod znacznikiem <span className="tk-code">&lt;input&gt;</span>, które umożliwiają wprowadzenie danych wybranego typu. Jeżeli przeraża cię ilość którą zobaczyłeś w tym pinie.. nie martw się - w następnej zakładce będzie więcej&nbsp;:P</p>
      <div className="uk-alert-primary" uk-alert="">
        <h3>ZADANIE BOJOWE !!!</h3>
        <p>Przed przeczytaniem następnego rozdziału, przypomnij sobie z jakimi formularzami spotkałeś się do tej pory w internecie oraz jakie dane można było w nich wprawdzać - powodzenia!</p>
      </div>
    </article>
  </>)
}

export default FirstLesson
