import React from 'react'
import { selectLanguageText } from '../../lang'

const SecondLesson = ( props ) => {
  const { lang } = props

  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">{ selectLanguageText( lang, "lesson-2-title") }</h3>
      <p>Jak wspomniałem w poprzednim rozdziale największą siłą formularzy są tak zwane kontrolki, które w języku HTML reprezentuje element <span className="tk-code">&lt;input&gt;</span>. Może on decydować jakiego typu dane są dopuszczalne i w jaki sposób należy je formatować - w tym celu używa atrybutu <span className="tk-code">type</span>.</p>
      <p>
        Wartości, które przyjmuje ten atrybut możesz znaleźć poniżej:
        <ul className="uk-list uk-list-hyphen">
          <li>
            <span className="tk-code">text</span> &ndash; pozwala na wporwadzenie dowolnego ciągu znaków - liczb, liter i znaków specjalnych.<br/>
            <form>
              <label for="textInput">Napisz mi coś ciekawego. </label>
              <input id="textInput" className="tk-input uk-align-right" type="text" />
            </form>
          </li>
          <li>
            <span className="tk-code">number</span> &ndash; umożliwia wprowadzenie dowolnego ciągu liczb.<br/>
            <form>
              <label for="numberInput">Jaka liczba jest twoją ulubioną? </label>
              <input id="numberInput" className="tk-input uk-align-right" type="number" />
            </form>
          </li>
          <li>
            <span className="tk-code">email</span> &ndash; wymaga wpisania poprawnego składniowo adresu email.<br/>
            <form>
              <label for="emailInput">Może wyglada jak zwykłe pole tekstowe, ale żeby zatwierdzić formularz z nim musisz podać prawidłowy email: </label>
              <input id="emailInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="email" required/>
              <input id="emailSubmitInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="submit" style={{ paddingLeft: 10, paddingRight: 10 }} value="Sprawdź!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">password</span> &ndash; umożliwia wprowadzanie tekstu, który zostanie ukryt pod znakami gwiazdki (*), aby utrudnić jego odczytanie.<br/>
            <form>
              <label for="passwordInput">Twoje słowa zostaną ukryte przed potencjalnymi podglądaczami<span className="tk-pervert"> - jak ja</span>. </label>
              <input id="passwordInput" className="tk-input uk-align-right" type="password" />
            </form>
          </li>
          <li>
            <span className="tk-code">radio</span> &ndash; definiuje listę wyboru pozwalającą wybrać tylko jeden element.<br/>
            <form>
              Możesz wybrać tylko jedną opcje<span className="tk-pervert"> - no.. chyba że jesteś sprytny i wiesz jak to obejść</span>: <br/>
              <input id="radioMaleInput" className="uk-radio" name="gender" type="radio" /><label for="radioMaleInput" style={{ paddingLeft: 10 }} >Chłopczyk</label><br/>
              <input id="radioFemaleInput" className="uk-radio" name="gender" type="radio" /><label for="radioFemaleInput" style={{ paddingLeft: 10 }} >Dziewczynka</label><br/>
              <input id="radioOtherInput" className="uk-radio" name="gender" type="radio" /><label for="radioOtherInput" style={{ paddingLeft: 10 }} >I tak cię lubię<span className="tk-pervert"> - mimo, iż zrobiłeś ze swoim ciałem coś dziwnego</span>&nbsp;:3</label><br/>
            </form>
          </li>
          <li>
            <span className="tk-code">checkbox</span> &ndash; tworzy listę wyboru pozwalającą wybrać dowolną ilość elementów.<br/>
            <form>
              Możesz wybrać dowolną liczbę opcji: <br/>
              <input id="checkboxAppleInput" className="uk-checkbox" name="apple" type="checkbox" /><label for="radioMaleInput" style={{ paddingLeft: 10 }} >Jabłko</label><br/>
              <input id="checkboxCarrotInput" className="uk-checkbox" name="carrot" type="checkbox" /><label for="radioFemaleInput" style={{ paddingLeft: 10 }} >Marcheweczka</label><br/>
              <input id="checkboxParslayInput" className="uk-checkbox" name="parsley" type="checkbox" /><label for="radioOtherInput" style={{ paddingLeft: 10 }} >Pietrucha</label><br/>
            </form>
          </li>
          <li>
            <span className="tk-code">button</span> &ndash; tworzy przycisk, który nie posiada przypisanej akcji.<br/>
            <form>
              Klikaj dowoli - i tak nic się nie stanie:
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="button" style={{ paddingLeft: 10, paddingRight: 10 }} value="Kliknij sobie!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">submit</span> &ndash; zatwierdza formularza i przekazuje go do określonego kontrolera odpowiedzialnego za jego przetworzenie.<br/>
            <form>
              Naciśnięcie spowoduje przesłanie formularza i przeładowanie strony:
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="submit" style={{ paddingLeft: 10, paddingRight: 10 }} value="Prześlij!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">reset</span> &ndash; przywraca wszystkie pola formularza do ich początkowej wartości.<br/>
            <form>
              Ten przycisk pozwala wyczyścić formularz:
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="text" placeholder="Najpierw to coś tu wpisz.."/>
              <input className="tk-input uk-align-right uk-margin-remove-bottom" type="reset" style={{ paddingLeft: 10, paddingRight: 10 }} value="Wyczyść!"/>
            </form>
          </li>
          <li>
            <span className="tk-code">color</span> &ndash; pozwala wybrać kolor za pomocą menu kontekstowego.
            <input className="tk-input uk-align-right uk-margin-remove-bottom" type="color" style={{ padding: 0}}/>
          </li>
          <li>
            <span className="tk-code">date</span> &ndash; dopuszcza wprowadzenie jedynie daty w formacie zdefiniowanym przez przeglądarkę.
            <form>
              <label for="dateInput">Jaki rok jest twoim ulubionym?</label>
              <input id="dateInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="date"/>
            </form>
          </li>
          <li>
            <span className="tk-code">time</span> &ndash; pozwala na wprowadzenie czasu w formacie zdefiniowanym przez przeglądarkę.
            <form>
              <label for="timeInput">Kiedy się spotkamy?</label>
              <input id="timeInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="time"/>
            </form>
          </li>
          <li>
            <span className="tk-code">datetime-local</span> &ndash;
            <form>
              <label for="datetimeInput">Wybierz dogodny dla siebie termin spotkania.</label>
              <input id="datetimeInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="datetime-local"/>
            </form>
          </li>
          <li>
            <span className="tk-code">month</span> &ndash;
            <form>
              <label for="monthInput">W którym miesiącu sie urodziłeś?</label>
              <input id="monthInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="month"/>
            </form>
          </li>
          <li>
            <span className="tk-code">week</span> &ndash;
            <form>
              <label for="weekInput">A czy wiesz który to był tydzień?</label>
              <input id="weekInput" className="tk-input uk-align-right uk-margin-remove-bottom" type="week"/>
            </form>
          </li>
          <li>
            <span className="tk-code">file</span> &ndash;
          </li>
          <li>
            <span className="tk-code">image</span> &ndash;
          </li>
          <li>
            <span className="tk-code">range</span> &ndash;
            <form>
              <label for="weekInput">Jak oceniasz skalę swojego cierpienia<span className="tk-pervert"> - nie.. nie możesz wyjść poza skale</span> ?</label>
              <input id="rangeInput" className="uk-range uk-align-right uk-margin-remove-bottom" style={{ maxWidth: 200 }} type="range"/>
            </form>
          </li>
          <li>
            <span className="tk-code">search</span> &ndash; zwyczajowo używany w polu, które ma służyć wyszukiwaniu treści na stronie, nie posiada żadnych specyficznych właściwości i zachowuje się jak pole tekstowe.
          </li>
          <li>
            <span className="tk-code">tel</span> &ndash; zwyczajowo używany w polu przeznaczonym na numer telefonu, nie posiada żadnych specyficznych właściwości i zachowuje się jak pole tekstowe.
          </li>
          <li>
            <span className="tk-code">url</span> &ndash;
          </li>
          <li>
            <span className="tk-code">hidden</span> &ndash; pozwala na stworzenie ukrytego pola tekstowego, niewidocznego w przeglądarce.
            <form>
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
            <span className="tk-code">rideonly</span> &ndash;
          </li>
          <li>
            <span className="tk-code">disabled</span> &ndash;
          </li>
          <li>
            <span className="tk-code">size</span> &ndash;
          </li>
          <li>
            <span className="tk-code">maxlength</span> &ndash;
          </li>
          <li>
            <span className="tk-code">min</span>, <span className="tk-code">max</span> &ndash;
          </li>
          <li>
            <span className="tk-code">multiple</span> &ndash;
          </li>
          <li>
            <span className="tk-code">pattern</span> &ndash;
          </li>
          <li>
            <span className="tk-code">placeholder</span> &ndash;
          </li>
          <li>
            <span className="tk-code">required</span> &ndash;
          </li>
          <li>
            <span className="tk-code">step</span> &ndash;
          </li>
          <li>
            <span className="tk-code">autofocus</span> &ndash;
          </li>
          <li>
            <span className="tk-code">autocomplete</span> &ndash;
          </li>
        </ul>
      </p>
      <iframe
        height="300"
        scrolling="no"
        title="web-forms-lesson-2"
        src="https://codepen.io/tomaszkisiel/embed/WNrrKqW?height=265&theme-id=dark&default-tab=html,result"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        style={{ width: '100%' }}>
        <div style={{ height: 300, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em', padding: '1em' }}>
          See the Pen <a href='https://codepen.io/tomaszkisiel/pen/gOPOmXm'>web-forms-lesson-2</a> by TomaszKisiel
          (<a href='https://codepen.io/tomaszkisiel'>@tomaszkisiel</a>) on <a href='https://codepen.io'>CodePen</a>.
        </div>
      </iframe>
    </article>
  </>)
}

export default SecondLesson
