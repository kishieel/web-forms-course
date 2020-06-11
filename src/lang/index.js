import React from 'react'

const translations = {
  "PLN": {
    "header": "Kurs formularzy HTML",
    "footer": "Projekt i wykonanie : Tomasz Kisiel 2020",
    "introduction-title": "Instrukcja obsługi.",

    "lesson-1-title": "Czym są formularze?",
    "lesson-1-paragraph-1": <>
      Najprościej mówiąc formularz <span className="tk-code">&lt;form&gt;</span> to nic innego jak kontener na kontrolki, które umozliwiają pobieranie danych od uzytkownika. Następnie po zatwierdzeniu formularza za pomocą zdarzenia <span className="tk-code">submit</span> mogą one zostać przesłane pod podany adres lub przetworzone przez skryp JS.
    </>,
    "lesson-1-paragraph-2": <>
      Najistotniejszymi atrybutami formularza są :
      <ul className="uk-list uk-list-hyphen uk-list-collapse">
        <li>
          <span className="tk-code">action</span> &ndash; określa adres URL pod który należy przesłać formularz (&nbsp;domyślnie : strona wysyłająca&nbsp;).
        </li>
        <li>
          <span className="tk-code">method</span> &ndash; określa metodę HTTP używaną podczas przesyłania formularza (&nbsp;domyślnie: GET&nbsp;).
        </li>
      </ul>
    </>,
    "lesson-1-paragraph-3": <>
      Aby poznać szczegołowo wszystkie atrybuty formularza możesz odwiedzić stronę <a href="https://www.w3schools.com/html/html_forms.asp">W3C School</a>, którą z całego serduszka polecam na początek nauki&nbsp;:)
    </>,
    "lesson-1-paragraph-4": <>
      <h3>Ciekawostka!</h3>
      <p>Czy wiedziałeś, że za pomocą formularza możesz wywołać klienta poczty na komputerze użytkownika? - ja nie. Aby to osiągnąć w atrybucie <span className="tk-code">action</span> wystarczy skorzystać z polecenia <span className="tk-code">mailto</span>, a następnie - po dwukropku - podać adres e-mail, na który ma zostać wysłana treść formularza.</p>
    </>,
    "lesson-1-paragraph-5": <>
      Dla wstępnego zrozumienia co mam na myśli mówiąc "kontener na kontrolki" możesz pobawić się poniższym przykładem: <span className="tk-pervert">Wiem że lubisz takie zabawy&nbsp;:3</span>
    </>,
    "lesson-1-paragraph-6": <>
      Jak sam widzisz formularz nie jest czymś nazbyt ciekawym. Zdecydowanie ciekawsze są jego różnorakie kontrolki ukryte pod znacznikiem <span className="tk-code">&lt;input&gt;</span>, które umożliwiają wprowadzenie danych wybranego typu. Jeżeli przeraża cię ilość którą zobaczyłeś w tym pinie.. nie martw się - w następnej zakładce będzie więcej&nbsp;:P
    </>,

    "lesson-2-title": "Rodzaje kontrolek.",

    "lesson-2-paragraph-1-1": "Jak wspomniałem w poprzednim rozdziale największą siłą formularzy są tak zwane kontrolki, które w języku HTML reprezentuje element",
    "lesson-2-paragraph-1-2": "Może on decydować jakiego typu dane są dopuszczalne i w jaki sposób należy je formatować - w tym celu używa atrybutu",

    "lesson-2-paragraph-2-1": "Wartości, które przyjmuje ten atrybut możesz znaleźć poniżej:",
    "lesson-2-paragraph-2-2": " pozwala na wporwadzenie dowolnego ciągu znaków - liczb, liter i znaków specjalnych.",
    "lesson-2-paragraph-2-3": "Napisz mi coś ciekawego. ",
    "lesson-2-paragraph-2-4": " umożliwia wprowadzenie dowolnego ciągu liczb.",
    "lesson-2-paragraph-2-5": "Jaka liczba jest twoją ulubioną? ",
    "lesson-2-paragraph-2-6": " wymaga wpisania poprawnego składniowo adresu email.",
    "lesson-2-paragraph-2-7": "Może wyglada jak zwykłe pole tekstowe, ale żeby zatwierdzić formularz z nim musisz podać prawidłowy email: ",
    "lesson-2-paragraph-2-8": " umożliwia wprowadzanie tekstu, który zostanie ukryt pod znakami gwiazdki (*), aby utrudnić jego odczytanie.",
    "lesson-2-paragraph-2-9": "",
    "lesson-2-paragraph-2-10": "",
    "lesson-2-paragraph-2-11": "",
    "lesson-2-paragraph-2-12": "",
    "lesson-2-paragraph-2-13": "",
    "lesson-2-paragraph-2-14": "",
    "lesson-2-paragraph-2-15": "",
    "lesson-2-paragraph-2-15": "",

    "lesson-2-paragraph-2-radio-desc-1": " definiuje listę wyboru pozwalającą wybrać tylko jeden element.",
    "lesson-2-paragraph-2-radio-desc-2-1": "Możesz wybrać tylko jedną opcje",
    "lesson-2-paragraph-2-radio-desc-2-2": " - no.. chyba że jesteś sprytny i wiesz jak to obejść",
    "lesson-2-paragraph-2-radio-opt-1": "Chłopczyk",
    "lesson-2-paragraph-2-radio-opt-2": "Dziewczynka",
    "lesson-2-paragraph-2-radio-opt-3-1": "I tak cię lubię",
    "lesson-2-paragraph-2-radio-opt-3-2": " - mimo, iż zrobiłeś ze swoim ciałem coś dziwnego",

    "lesson-2-paragraph-2-checkbox-1": " tworzy listę wyboru pozwalającą wybrać dowolną ilość elementów.",
    "lesson-2-paragraph-2-checkbox-2": "Możesz wybrać dowolną liczbę opcji: ",
    "lesson-2-paragraph-2-checkbox-opt-1": "Jabłko",
    "lesson-2-paragraph-2-checkbox-opt-2": "Marcheweczka",
    "lesson-2-paragraph-2-checkbox-opt-3": "Pietrucha",

    "lesson-2-paragraph-2-button-1": " tworzy przycisk, który nie posiada przypisanej akcji.",
    "lesson-2-paragraph-2-button-2": "Klikaj dowoli - i tak nic się nie stanie:",
    "lesson-2-paragraph-2-button-3": "Kliknij sobie!",

    "lesson-2-paragraph-2-submit-1": " zatwierdza formularza i przekazuje go do określonego kontrolera odpowiedzialnego za jego przetworzenie.",
    "lesson-2-paragraph-2-submit-2": "Naciśnięcie spowoduje przesłanie formularza i przeładowanie strony:",
    "lesson-2-paragraph-2-submit-3": "Prześlij!",

    "lesson-2-paragraph-2-reset-1": " przywraca wszystkie pola formularza do ich początkowej wartości.",
    "lesson-2-paragraph-2-reset-2": "Ten przycisk pozwala wyczyścić formularz:",
    "lesson-2-paragraph-2-reset-3": "Najpierw to coś tu wpisz..",
    "lesson-2-paragraph-2-reset-4": "Wyczyść!",

    "lesson-2-paragraph-2-color": " pozwala wybrać kolor za pomocą menu kontekstowego.",

    "lesson-2-paragraph-2-date-1": " dopuszcza wprowadzenie jedynie daty w formacie zdefiniowanym przez przeglądarkę.",
    "lesson-2-paragraph-2-date-2": "Jaki jest twój szczęśliwy dzień?",

    "lesson-2-paragraph-2-time-1": " pozwala na wprowadzenie czasu w formacie zdefiniowanym przez przeglądarkę.",
    "lesson-2-paragraph-2-time-2": "Kiedy się spotkamy?",

    "lesson-2-paragraph-2-date-time-1": "umożliwia jednoczesne wprowadzenie daty i czasu w formacie określonym przez przeglądarkę.",
    "lesson-2-paragraph-2-date-time-2": "Wybierz dogodny dla siebie termin spotkania.",

    "lesson-2-paragraph-2-month-1": " pozwala na wprowadzenie miesiąca wybranego roku.",
    "lesson-2-paragraph-2-month-2": "W którym miesiącu sie urodziłeś?",

    "lesson-2-paragraph-2-week-1": " umożliwia wprowadzenie tygodnia wybranego roku.",
    "lesson-2-paragraph-2-week-2": "A czy wiesz który to był tydzień?",

    "lesson-2-paragraph-2-file": "tworzy kontroler, któremu możemy przekazać dowolny plik z naszego komputera - po jego naciśnieciu otworzy się menu kontekstowe umożliwiające wybór pliku.",

    "lesson-2-paragraph-2-range-1": " domyślnie pozwala wybrać wartości na skali od 0 do 100.",
    "lesson-2-paragraph-2-range-2": "Jak oceniasz skalę swojego cierpienia",
    "lesson-2-paragraph-2-range-3": " - nie.. nie możesz wyjść poza skale",

    "lesson-2-paragraph-2-search": " zwyczajowo używany w polu, które ma służyć wyszukiwaniu treści na stronie, nie posiada żadnych specyficznych właściwości i zachowuje się jak pole tekstowe.",

    "lesson-2-paragraph-2-tel": " zwyczajowo używany w polu przeznaczonym na numer telefonu, nie posiada żadnych specyficznych właściwości i zachowuje się jak pole tekstowe.",

    "lesson-2-paragraph-2-url-1": " wymaga wpisania poprawnego składniowo adresu url.",
    "lesson-2-paragraph-2-url-2": "Podaj adres swojej ulibionej strony internetowej",
    "lesson-2-paragraph-2-url-3": " - eghem... legalnej strony internetowej",
    "lesson-2-paragraph-2-url-4": "Sprawdź!",

    "lesson-2-paragraph-2-hidden-1": " pozwala na stworzenie ukrytego pola tekstowego, niewidocznego w przeglądarce.",
    "lesson-2-paragraph-2-hidden-2": "Teraz mnie widzisz.. a teraz nie!",

    "lesson-2-paragraph-3-1": "Jeżeli ponownie zaniemówiłeś onieśmielony ilością wartości jakie może przyjąć atrybut ",
    "lesson-2-paragraph-3-2": " - spokojnie! Ten atrybut nie jest jedynym atrybutem tagu ",

    "lesson-3-title": "Jak układać formularze?",
    "lesson-4-title": "Walidacja formularzy w HTML",
    "lesson-5-title": "Walidacja formularzy w JS",
    "lesson-6-title": "Formularze z Bootstrap",
    "epilogue-title": "Słowo zakończenia",
    "not-found-title": "Chyba zabłądziłeś przyjacielu :3",
    "not-found-what-next": "Co robisz ?",
    "not-found-back-home": "Zabierz mnie do normalności..",
    "not-found-go-deep": "Wchodzę w głąb kurliczej nory!",
    "not-found-go-real-deep": "Pokaż mi prawdę!",
  },
  "ENG": {
    "header": "HTML web forms course",
    "footer": "Design and implementation: Tomasz Kisiel 2020",
    "introduction-title": "How to use it?",

    "lesson-1-title": "What are forms?",
    "lesson-1-paragraph-1": <>To put is simply - tag <span className="tk-code">&lt;form&gt;</span> is nothing more then special container for inputs, which allow to retrive data for user. Then, after confirming the form with the <span className="tk-code">submit</span> event, they can be sent to the address provided or processed by the JS script.</>,
    "lesson-1-paragraph-2": <>The most important attributes of the form are : <ul className="uk-list uk-list-hyphen uk-list-collapse"> <li> <span className="tk-code">action</span> &ndash; specifies the URL to which the form should be sent (default: the submitting page). </li> <li> <span className="tk-code">method</span> &ndash; specifies the HTTP method used when submitting the form (default: GET). </li> </ul></>,
    "lesson-1-paragraph-3": <>To learn more about all the attributes of the form, you can visit the <a href="https://www.w3schools.com/html/html_forms.asp">W3C School</a> website, which I recommend with all my heart to start learning&nbsp;:)</>,
    "lesson-1-paragraph-4": <><h3>Curiosity!</h3> <p> Did you know that using the form you can call the mail client on your computer? - I do not. To achieve this in the <span className="tk-code">action</span> attribute just use the <span className="tk-code">mailto</span> command and then - after a colon - enter the email address to which the form content should be sent.</p></>,
    "lesson-1-paragraph-5": <>For a preliminary understanding of what I mean by "container for inputs" you can play with the following example: <span className="tk-pervert">I know you like to amouse like this&nbsp:3</span></>,
    "lesson-1-paragraph-6": <>As you can see, the form is not something too interesting. Definitely more interesting are its various controls hidden under the <span className="tk-code">&lt;input&gt;</span> tag,  which allow you to enter data of the selected type. If you are scared by the amount of code you saw in this pin .. don't worry - there will be more in the next tab&nbsp;:P</>,

    "lesson-2-title": "Inputs types.",
    "lesson-3-title": "How to arrange forms?",
    "lesson-4-title": "Form validation in HTML",
    "lesson-5-title": "Form validation in JS",
    "lesson-6-title": "Forms with Bootstrap",
    "epilogue-title": "Epilogue",
    "not-found-title": "I think you got lost my friend: 3",
    "not-found-what-next": "What are you doing ?",
    "not-found-back-home": "Take me to home..",
    "not-found-go-deep": "I go deep into the rabbit hole!",
    "not-found-go-real-deep": "Show me the truth!",
  }
}

export const selectLanguageText = ( lang, text ) => {
  return translations[ lang ]?.[ text ]
}
