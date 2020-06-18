import React from 'react'
import PageSwitcher from '../theme/PageSwitcher'
import CodePen from '../theme/CodePen'

const FormValidationHtml = ( ) => {
  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Walidacja formularzy w HTML</h3>
      <p>Głównym zadaniem większości formularzy jest zebranie danych od użytkownika i przesłanie ich do serwera, aby ten przetworzył je w określony sposób i wykonał odpowiednie akcje. Niestety, wśród potencjalnych użytkowników mogą pojawić się tacy, którzy przez przypadek lub z premedytacją wpiszą coś nieodpowiedniego <span className="tk-pervert"> - ponieważ chcą zdobyć twój pesel, aby wziąć na Ciebie kredyt</span>. Aby odciążyć serwer od zbędnego przetwarzania nie prawidłowych danych warto wykorzystać przeglądarkę uzytkownika i dokonać wstępnej walidacji przesyłanych danych.</p>
      <p>Do niedawna jedynym sposobem sprawdzenia formularza po stronie klienta było wykorzystanie kodu JS jednak wraz z HTML5 pojawiło się kilka ciekawych opcji, które mogą ułatwić cały proces.</p>
      <p><span className="tk-code">required</span> &ndash; to atrybut znacznika<span className="tk-code"> &lt;input&gt;</span>, który sprawdza czy podane pole zostało uzupełnione jakąkolwiek wartością. Jeżeli oznaczona kontrolka jest pusta formularz nie zostanie przesłany.</p>
      <p><span className="tk-code">type="email"</span> &ndash; aby przesłać formularz, który zawiera kontrolkę tego typu wymagane jest jej uzupełnienie poprawnym adresem email.</p>
      <p>Powyższy przykłada znacznika jest bardzo ciekawy, niestety jest jedyny w swoim rodzaju. Wciąż brakuje jego odpowiedników, które mogły by sprawdzać poprawność wpisanego numeru telefonu, kodu pocztowego miasta, czy długości wprowadzanego hasła. Mimo to dość łatwo sami możemy stworzyć kontrolki posiadające wspomniane funkcjonalności wykorzystując tzw. wzorce.</p>
      <p><span className="tk-code">pattern</span> &ndash; </p>
      <CodePen url="https://codepen.io/tomaszkisiel/embed/PoZWzqr?height=265&theme-id=dark&default-tab=html,result"
        title="web-forms-example/form-validation-html" />
      <div class="uk-alert-danger" uk-alert="">
        <h3>Ostrzeżenie!</h3>
        <p>Opisane tu elementy mogą nie działać w niektórych przeglądarkach, które jeszcze nie wspierają najnowszych rozwiązań i napewno nie działają na przeglądarkach, które nie wspierają <a href="https://developer.mozilla.org/pl/docs/HTML/HTML5" className="uk-link">HTML5</a>.</p>
      </div>
      <PageSwitcher previousURL="/lesson/form-design" previousText="Jak układać formularze?"
        nextURL="/lesson/form-validation-js" nextText="Walidacja formularzy w JS"/>
    </article>
  </>)
}

export default FormValidationHtml
