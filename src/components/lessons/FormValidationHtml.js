import React from 'react'
import PageSwitcher from '../theme/PageSwitcher'
import CodePen from '../theme/CodePen'

const FormValidationHtml = ( ) => {
  return (<>
    <article id="content" className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Walidacja formularzy w HTML</h3>
      <p>Głównym zadaniem większości formularzy jest zebranie danych od użytkownika i przesłanie ich do serwera, aby ten przetworzył je w określony sposób i wykonał odpowiednie akcje. Niestety, wśród potencjalnych użytkowników mogą pojawić się tacy, którzy przez przypadek lub z premedytacją wpiszą coś nieodpowiedniego <span className="tk-pervert"> - ponieważ chcą zdobyć twój pesel, aby wziąć na Ciebie kredyt</span>. Aby odciążyć serwer od zbędnego przetwarzania nie prawidłowych danych warto wykorzystać przeglądarkę użytkownika i dokonać wstępnej walidacji przesyłanych danych.</p>
      <p>Do niedawna jedynym sposobem sprawdzenia formularza po stronie klienta było wykorzystanie kodu JS, jednak wraz z HTML5 pojawiło się kilka ciekawych opcji, które mogą ułatwić cały proces.</p>
      <p><span className="tk-code">required</span> &ndash; to atrybut znacznika<span className="tk-code"> &lt;input&gt;</span>, który sprawdza, czy podane pole zostało uzupełnione jakąkolwiek wartością. Jeżeli oznaczona kontrolka jest pusta, formularz nie zostanie przesłany.</p>
      <p><span className="tk-code">type="email"</span> &ndash; aby przesłać formularz, który zawiera kontrolkę tego typu wymagane jest jej uzupełnienie poprawnym adresem email.</p>
      <p>Powyższy typ znacznika jest bardzo ciekawy, niestety jest jedyny w swoim rodzaju. Wciąż brakuje jego odpowiedników, które mogłyby sprawdzać poprawność wpisanego numeru telefonu, kodu pocztowego miasta, czy długości wprowadzanego hasła. Mimo to dość łatwo sami możemy stworzyć kontrolki posiadające wspomniane funkcjonalności wykorzystując tzw. wzorce.</p>
      <p><span className="tk-code">pattern</span> &ndash; atrybut znacznika<span className="tk-code"> &lt;input&gt;</span>, który sprawdza, czy podane pole zostało wypełnione wartością spełniającą wyrażenie regularne podane jako wartość atrybutu.</p>
      <div className="uk-alert-primary" uk-alert="">
        <h3>Czym są <a className="uk-link" href="https://www.w3schools.com/jsref/jsref_obj_regexp.asp">wyrażenie regularne</a>?</h3>
        <p>To wzorce opisujące łańcuch znaków, które za pomocą symboli o zdefiniowanej funkcjonalności i znaczeniu pozwalają sprawdzić, czy dany tekst pasuje do podanego wzorca. Dzięki nim możemy ustalić na przykład, jak wygląda wzorcowy numer telefonu, adres pocztowy lub silne hasło. Kilka z ważniejszych symboli używanych do tworzenia wyrażeń regularnych w HTML to:</p>
        <table className="uk-table uk-table-divider uk-table-responsive uk-margin-remove-top">
          <tr>
            <th className="tk-table-responsive-header">Symbol</th>
            <th className="tk-table-responsive-header">Znaczenie</th>
            <th className="tk-table-responsive-header">Przykład</th>
            <th className="tk-table-responsive-header">Pasujące łańcuchy</th>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">^</th>
            <td>łańcuch znaków rozpoczyna się od podanego wyrazu</td>
            <td className="uk-text-nowrap">^ma</td>
            <td>marchewk, marcin, malarz</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">$</th>
            <td>łańcuch znaków kończy się podanym wyrazem</td>
            <td className="uk-text-nowrap">arz$</td>
            <td>kucharz, murarz, stolarz</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">|</th>
            <td>łańcuch znaków zawiera jedną z podanych fraz</td>
            <td className="uk-text-nowrap">panna|anna</td>
            <td>panna, anna</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">( ... )</th>
            <td>pozwala wyodrębnić pewien zakres w ciągu znaków</td>
            <td className="uk-text-nowrap">ma(ma)</td>
            <td>ma, mama</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">.</th>
            <td>zastępuje dowolny znak w łańcuchu znaków</td>
            <td className="uk-text-nowrap">.anna</td>
            <td>panna, wanna, manna</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">?</th>
            <td>łańcuch nie zawiera lub zawira tylko jedną z fraz poprzedzonych tym znakiem</td>
            <td className="uk-text-nowrap">jo(anna|la)?</td>
            <td>jo, joanna, jola</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">+</th>
            <td>łańcuch zawiera co najmniej jedną z fraz poprzedzonych tym znakiem</td>
            <td className="uk-text-nowrap">karot(ka|ki)+</td>
            <td>karotka, karotki, karotkaka</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">*</th>
            <td>łańcuch zawiera dowolną ilość fraz poprzedzonych tym znakiem, może też w ogóle ich nie posiadać</td>
            <td className="uk-text-nowrap">(ha|hi|hy)*</td>
            <td>ha, haha, hahahihy</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">{ "{ n, m }" }</th>
            <td>łańcuch zawiera określoną liczbę znaków lub fraz występującą od N do M razy. Można też użyć zapisuj { `{ N, }` }, który oznacza minimum N wystąpień lub { `{ N }` } dokładnie N wystąpień</td>
            <td className="uk-text-nowrap">a{ `{1,4}` }</td>
            <td>a, aa, aaa</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">[ ... ]</th>
            <td>łańcuch zawiera dowolny znak z podanego zakresu</td>
            <td className="uk-text-nowrap">[a-zA-Z0-9]{ `{ 1, }` }</td>
            <td>Alfa9, ala, KaroLina</td>
          </tr>
          <tr>
            <th className="uk-text-center uk-text-top">[ ^ ... ]</th>
            <td>łańcuch nie zawiera żadnego znaku z podanego zakresu</td>
            <td className="uk-text-nowrap">[^a-z]{ `{ 1, }` }</td>
            <td>SALAMANDRA, SKLEP, AUTO</td>
          </tr>
        </table>
      </div>
      <p>Wymienione w tabelce symbole to tylko niektóre elementy składni wyrażeń regularnych. Opisane pojedynczo mogą wydawać się banalne, jednak ich prawdziwą siłą są wzorce, które powstają po ich połączeniu. Zanim przejdziemy dalej, chciałbym przełożyć Ci na język ludzki kilka przykładów.</p>
      <hr/>
      <p><span className="tk-code">{ `^[A-Z][a-z]{1,}` }</span> &ndash; tego wzorca możemy użyć, kiedy chcemy, aby użytkownik wprowadził imię rozpoczynające się wielką literą. Rozbijając go na części składowe, możemy przeczytać: <span className="tk-code">{ `^[A-Z]` }</span> &ndash; łańcuch znaków rozpoczyna się od dowolnej, wielkiej litery i <span className="tk-code">{ `[a-z]{1,}` }</span> &ndash; zawiera co najmniej jedną małą literę.</p>
      <hr/>
      <p><span className="tk-code">{ `^[a-z0-9_.-]+@[a-z]+[.][a-z]{1,3}` }</span> &ndash; możemy użyć, aby sprawdzić, czy pole zawiera poprawny adres email.<span className="tk-code"> { `^[a-z0-9_.-]+` }</span> &ndash; łańcuch znaków rozpoczyna się od co najmniej jednej małej litery, cyfry, znaku podkreślenia, kropki lub myślnika. Następnie<span className="tk-code"> { `@[a-z]+` }</span> &ndash; występuje znak <i>małpa</i> i co najmniej jedna mała litera. Na końcu<span className="tk-code"> { `[.][a-z]{1,3}` }</span> &ndash; wpisano <i>kropkę</i> i od jednej do trzech małych liter.</p>
      <hr/>
      <div>
        <span className="tk-code">{ `(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}` }</span> &ndash; to zdecydowanie skomplikowane wyrażenie, które w całości wymaga, aby tekst posiadał co najmniej osiem znaków w skład, których wchodzą co najmniej jedna cyfra, mała i wielką literę.
        <ul className="uk-list uk-margin-medium-left">
          <li>
            <span className="tk-code">{ `(?=.*[0-9])` }</span> &ndash; oznacza, że w dowolnym miejscu łańcucha występuje cyfra. Możemy go rozbić na jeszcze mniejsze części:
            <ul className="uk-list uk-margin-medium-left">
              <li>
                <span className="tk-code">{ `?=` } </span>&ndash; to tzw. pozytywne spojrzenie w przyszłość (ang. positive lookahead), które pozwala wyodrępniać następując po nim fraze w dowolnym miejscu tekstu bez zachowania kolejności względem innych zapisów wzorca.
              </li>
              <li>
                <span className="tk-code">{ `.*` } </span>&ndash; dowolna ilość znaków lub ich brak.
              </li>
              <li>
                <span className="tk-code">{ `[0-9]` } </span>&ndash; jedna dowolna cyfra
              </li>
            </ul>
          </li>
          <li>
            <span className="tk-code">{ `.{8,}` }</span> &ndash; wyrażenie zawiera co najmniej 8 dowolnych znaków
          </li>
        </ul>
      </div>
      <hr/>
      <p>Jeżeli to, co właśnie zobaczyłeś, wydaje Ci się trudne - spokojnie - to jest trudne, kiedy widzi się to po raz pierwszy. Przeanalizuj wszystko powoli i spokojnie, skorzystaj z odnośników, które podałem. Pomocne może też okazać się <a className="uk-link" href="https://regexper.com/#%28%3F%3D.*%5B0-9%5D%29%28%3F%3D.*%5Ba-z%5D%29%28%3F%3D.*%5BA-Z%5D%29%28%3F%3D.*%5B!%40%23%24%25%5E%26*_-%5D%29.%7B8%2C%7D">narzędzie</a>, które pokazuje wzorce w postaci grafów. <span className="tk-pervert">Wierzę w Cb przyjacielu albo przyjaciółko.. na pewno dasz radę.</span></p>
      <CodePen pen="PoZWzqr"
        title="web-forms-example/form-validation-html"
        height={450} />
      <div class="uk-alert-danger" uk-alert="">
        <h3>Ostrzeżenie!</h3>
        <p>Opisane tu elementy mogą nie działać w przeglądarkach, które jeszcze nie wspierają najnowszych rozwiązań i na pewno nie będą działać w starszych wersjach przeglądarek, które nie wspierają <a href="https://developer.mozilla.org/pl/docs/HTML/HTML5" className="uk-link">HTML5</a>.</p>
      </div>
      <PageSwitcher previousURL="/lesson/form-design" previousText="Jak układać formularze?"
        nextURL="/lesson/form-validation-js" nextText="Walidacja formularzy w JS"/>
    </article>
  </>)
}

export default FormValidationHtml
