import React from 'react'
import PageSwitcher from '../theme/PageSwitcher'
import CodePen from '../theme/CodePen'

const SecondLesson = ( ) => {
  return (<>
    <article id="content" className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Rodzaje znacznika input</h3>
      <p>Jedną z najbardziej rozbudowanych kontrolek formularza jest znacznik <span className="tk-code"> &lt;input&gt;</span>. Może on samodzielnie decydować jakiego typu dane są dopuszczalne i w jaki sposób należy je formatować - w tym celu używa atrybutu <span className="tk-code">type</span>.</p>
      <p>
        Wartości, które przyjmuje ten atrybut możesz znaleźć poniżej:
        <ul className="uk-list uk-list-hyphen">
          <li>
            <span className="tk-code">text</span> &ndash; pozwala na wporwadzenie dowolnego ciągu znaków - liczb, liter i znaków specjalnych.<br/>
            <form className="uk-overflow-hidden">
              <label for="textInput">Napisz mi coś ciekawego. </label>
              <input id="textInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="text" style={{ maxWidth: '100%' }} name="fname" autofocus/>
            </form>
          </li>
          <li>
            <span className="tk-code">number</span> &ndash; umożliwia wprowadzenie dowolnego ciągu liczb.<br/>
            <form className="uk-overflow-hidden">
              <label for="numberInput">Jaka liczba jest twoją ulubioną? </label>
              <input id="numberInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="number" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">email</span> &ndash; wymaga wpisania poprawnego składniowo adresu email.<br/>
            <form className="uk-overflow-hidden">
              <label for="emailInput">Może wyglada jak zwykłe pole tekstowe, ale żeby zatwierdzić formularz z nim musisz podać prawidłowy email: </label>
              <input id="emailInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="email" required/>
              <input id="emailSubmitInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="submit" style={{ paddingLeft: 10, paddingRight: 10, maxWidth: '100%' }} value="Sprawdź!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">password</span> &ndash; umożliwia wprowadzanie tekstu, który zostanie ukryt pod znakami gwiazdki (*), aby utrudnić jego odczytanie.<br/>
            <form className="uk-overflow-hidden">
              <label for="passwordInput">Twoje słowa zostaną ukryte przed potencjalnymi podglądaczami<span className="tk-pervert"> - jak ja</span>. </label>
              <input id="passwordInput" className="tk-input uk-align-right" type="password" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">radio</span> &ndash; definiuje listę wyboru pozwalającą wybrać tylko jeden element.<br/>
            <form className="uk-overflow-hidden">
              Możesz wybrać tylko jedną opcje<span className="tk-pervert"> - no.. chyba że jesteś sprytny i wiesz jak to obejść</span>: <br/>
              <input id="radioMaleInput" className="uk-radio" name="gender" type="radio" /><label for="radioMaleInput" style={{ paddingLeft: 10 }} >Chłopczyk</label><br/>
              <input id="radioFemaleInput" className="uk-radio" name="gender" type="radio" /><label for="radioFemaleInput" style={{ paddingLeft: 10 }} >Dziewczynka</label><br/>
              <input id="radioOtherInput" className="uk-radio" name="gender" type="radio" /><label for="radioOtherInput" style={{ paddingLeft: 10 }} >I tak cię lubię<span className="tk-pervert"> - mimo, iż zrobiłeś ze swoim ciałem coś dziwnego</span>&nbsp;:3</label><br/>
            </form>
          </li>
          <li>
            <span className="tk-code">checkbox</span> &ndash; tworzy listę wyboru pozwalającą wybrać dowolną ilość elementów.<br/>
            <form className="uk-overflow-hidden">
              Możesz wybrać dowolną liczbę opcji: <br/>
              <input id="checkboxAppleInput" className="uk-checkbox" name="apple" type="checkbox" /><label for="radioMaleInput" style={{ paddingLeft: 10 }} >Jabłko</label><br/>
              <input id="checkboxCarrotInput" className="uk-checkbox" name="carrot" type="checkbox" /><label for="radioFemaleInput" style={{ paddingLeft: 10 }} >Marcheweczka</label><br/>
              <input id="checkboxParslayInput" className="uk-checkbox" name="parsley" type="checkbox" /><label for="radioOtherInput" style={{ paddingLeft: 10 }} >Pietrucha</label><br/>
            </form>
          </li>
          <li>
            <span className="tk-code">button</span> &ndash; tworzy przycisk, który nie posiada przypisanej akcji.<br/>
            <form className="uk-overflow-hidden">
              Klikaj dowoli - i tak nic się nie stanie:
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="button" style={{ maxWidth: '100%', paddingLeft: 10, paddingRight: 10 }} value="Kliknij sobie!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">submit</span> &ndash; zatwierdza formularza i przekazuje go do określonego kontrolera odpowiedzialnego za jego przetworzenie.<br/>
            <form className="uk-overflow-hidden">
              Naciśnięcie spowoduje przesłanie formularza i przeładowanie strony:
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="submit" style={{ maxWidth: '100%', paddingLeft: 10, paddingRight: 10 }} value="Prześlij!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">reset</span> &ndash; przywraca wszystkie pola formularza do ich początkowej wartości.<br/>
            <form className="uk-overflow-hidden">
              Ten przycisk pozwala wyczyścić formularz:
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="text" placeholder="Najpierw to coś tu wpisz.."/>
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="reset" style={{ maxWidth: '100%', paddingLeft: 10, paddingRight: 10 }} value="Wyczyść!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">color</span> &ndash; pozwala wybrać kolor za pomocą menu kontekstowego.
            <form className="uk-overflow-hidden">
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="color" style={{ padding: 0, maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">date</span> &ndash; dopuszcza wprowadzenie jedynie daty w formacie zdefiniowanym przez przeglądarkę.
            <form className="uk-overflow-hidden">
              <label for="dateInput">Jaki rok jest twoim ulubionym?</label>
              <input id="dateInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="date" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">time</span> &ndash; pozwala na wprowadzenie czasu w formacie zdefiniowanym przez przeglądarkę.
            <form className="uk-overflow-hidden">
              <label for="timeInput">Kiedy się spotkamy?</label>
              <input id="timeInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="time" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">datetime-local</span> &ndash; umożliwia jednoczesne wprowadzenie daty i czasu w formacie określonym przez przeglądarkę.
            <form className="uk-overflow-hidden">
              <label for="datetimeInput">Wybierz dogodny dla siebie termin spotkania.</label>
              <input id="datetimeInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="datetime-local" style={{ maxWidth: '100%' }} />
            </form>
          </li>
          <li>
            <span className="tk-code">month</span> &ndash; pozwala na wprowadzenie miesiąca wybranego roku.
            <form className="uk-overflow-hidden">
              <label for="monthInput">W którym miesiącu sie urodziłeś?</label>
              <input id="monthInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="month" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">week</span> &ndash; umożliwia wprowadzenie tygodnia wybranego roku.
            <form className="uk-overflow-hidden">
              <label for="weekInput">A czy wiesz który to był tydzień?</label>
              <input id="weekInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="week" style={{ maxWidth: '100%' }}/>
            </form>
          </li>
          <li>
            <span className="tk-code">file</span> &ndash; tworzy kontroler, któremu możemy przekazać dowolny plik z naszego komputera - po jego naciśnieciu otworzy się menu kontekstowe umożliwiające wybór pliku.
          </li>
          <li>
            <span className="tk-code">range</span> &ndash; domyślnie pozwala wybrać wartości na skali od 0 do 100.
            <form className="uk-overflow-hidden">
              <label for="weekInput">Jak oceniasz skalę swojego cierpienia<span className="tk-pervert"> - nie.. nie możesz wyjść poza skale</span> ?</label>
              <span className="uk-align-right uk-margin-remove-bottom">
                0&nbsp;
                <input id="rangeInput" className="uk-range " style={{ width: 200, maxWidth: '100%', paddingTop: 10, paddingBottom: 10 }} type="range" />
                &nbsp;100
              </span>
            </form>
          </li>
          <li>
            <span className="tk-code">search</span> &ndash; zwyczajowo używany w polu, które ma służyć wyszukiwaniu treści na stronie, nie posiada żadnych specyficznych właściwości i zachowuje się jak pole tekstowe.
          </li>
          <li>
            <span className="tk-code">tel</span> &ndash; zwyczajowo używany w polu przeznaczonym na numer telefonu, nie posiada żadnych specyficznych właściwości i zachowuje się jak pole tekstowe.
          </li>
          <li>
            <span className="tk-code">url</span> &ndash; wymaga wpisania poprawnego składniowo adresu url.
            <form className="uk-overflow-hidden" onSubmit={ (e) => { e.preventDefault(); return false; } }>
              <label for="urlInput">Podaj adres swojej ulibionej strony internetowej<span className="tk-pervert"> - eghem... legalnej strony internetowej</span>. </label>
              <input id="urlInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="url" required/>
              <input id="urlSubmitInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="submit" style={{ paddingLeft: 10, paddingRight: 10, maxWidth: '100%' }} value="Sprawdź!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">hidden</span> &ndash; pozwala na stworzenie ukrytego pola tekstowego, niewidocznego w przeglądarce.
            <form className="uk-overflow-hidden">
              <label for="hiddenInput">Teraz mnie widzisz.. a teraz nie!</label>
              <input id="hiddenInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="hidden"/>
            </form>
          </li>
        </ul>
      </p>
      <p>
        Jeżeli ponownie zaniemówiłeś onieśmielony ilością wartości jakie może przyjąć atrybut <span className="tk-code">type</span> - spokojnie! Ten atrybut nie jest jedynym atrybutem tagu <span className="tk-code">&lt;input&gt;</span>.
      </p>
      <p>
        Innymi ciekawymi<span className="tk-pervert">, jak spływ wody w klozecie,</span> atrybutami są:
        <ul className="uk-list uk-list-hyphen">
          <li>
            <span className="tk-code">value</span> &ndash; pozwala na określenie początkowej wartości pola.
          </li>
          <li>
            <span className="tk-code">name</span> &ndash; określa nazwę pola, niezbędną do przesłania wartości pola w formularzu.
          </li>
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
            <span className="tk-code">autocomplete</span> &ndash; określa, czy pole wejściowe powinno mieć włączone autouzupełnianie.
          </li>
        </ul>
      </p>
      <p>
        Przykładowy formularz wykorzystujący większość z nowo-poznanych kontrolek możesz zobaczyć poniżej. Zachęcam do zabawy i samodzielnego stworzenia dowolnego formularza.
      </p>
      <CodePen pen="WNrrKqW"
        title="web-forms-example/input-types"
        height={450} />
      <div className="uk-alert-primary" uk-alert="">
        <h3>ZADANIE BOJOWE !!!</h3>
        <p>Korzystając ze zdobytych w tej lekcji informacji spróbuj stworzyć formularz wykorzystujący wszyskie kontrolki, oraz ich atrybuty. Dodatkowe informacje na temat znacznika <span className="tk-code">&lt;input&gt;</span> możesz znaleźć <a className="uk-link" href="https://www.w3schools.com/html/html_form_input_types.asp">tutaj</a>. Bądź kreatywny - powodzenia!</p>
      </div>
      <PageSwitcher previousURL="/lesson/form-elements" previousText="Elementy formularza"
        nextURL="/lesson/form-design" nextText="Jak układać formularze?"/>
    </article>
  </>)
}

export default SecondLesson
