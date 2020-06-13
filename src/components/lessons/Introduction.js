import React, { useState } from 'react'
import PageSwitcher from '../theme/PageSwitcher'

const Introduction = () => {
  const { exampleAlert, setExampleAlert } = useState( false )

  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Instrukcja obsługi</h3>
      <p>Witaj w kursie formularzy HTML! Nie wiem kim jesteś i skąd się tu wziąłeś<span className="tk-pervert"> tzn. wiem, wszyscy przyśliśmy na świat w podobnych okolicznościach, ale to nie istotne</span>, skoro jednak już tu jesteś to zanim zaczniesz korzystać z następnych lekcji chciałbym Ci dać kilka porad odnośnie tego co jest czym i co jak działa, abyś mógł jak najszybciej nauczyć się wszysktkiego co związane jest z formularzami.</p>
      <p>Oprócz standardowych opisów, na kolejnych stronach kursu możesz znaleźć wbodowane elementy prezentujące opisane funkcjonalności oraz okienka takie jak to poniżej - przyjżyj się im uważnie!</p>
      <div className="uk-margin-bottom">
        <div className="uk-text-center uk-margin-bottom">
          <button class="uk-button uk-button-primary">Element wbudowany - klikaj śmiało!</button>
        </div>
        <div>
          <div class="uk-alert-primary" uk-alert="">
            <a class="uk-alert-close" uk-close=""></a>
            <h3>Ucz się, ucz!</h3>
            <p>Wiedza to potęgi klucz, a kto kluczy ma wiele ten zostaje w szkole woźnym.</p>
          </div>
        </div>
      </div>
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
      <p>To co właśnie obejrzałeś to jeden z tak zwanych pinów pochodzący ze strony <a href="https://codepen.io/tomaszkisiel">CodePen</a>. Ich użycie umożliwia mi wygodne prezentowanie treści z nowo poznanej lekcji w formie kodu - HTML, CSS i JS oraz tego jak wyglądać będzie to w przeglądarce.</p>
      <p>Jak widzisz, okienko składa się z dwóch widoków i kilku przycisków. Pierwszy z widoków - ten po lewej - to właśnie kod, który chcę Ci zaprezentować, a drugi - ten po prawej - to jego rezultat, który można zobaczyć w przeglądarce po jego uruchomieniu.</p>
      <div>
        Do twojej dyspozycji pozostają przyciski:
        <ul className="uk-list uk-list-hyphen uk-list-collapse">
          <li>
            <span className="tk-code">HTML</span> &ndash; zakładka z kodem HTML
          </li>
          <li>
            <span className="tk-code">CSS</span> &ndash; zakładka z kodem CSS
          </li>
          <li>
            <span className="tk-code">JS</span> &ndash; zakładka z kodem JS
          </li>
          <li>
            <span className="tk-code">Result</span> &ndash; podgląd wyniku finalnego
          </li>
          <li>
            <span className="tk-code">EDIT ON CODEPEN</span> &ndash; przekierowuje na stronę, gdzie możesz do woli edytować mój kod i na bieżąco obserwować jakie zmiany wprowadzasz - polecam korzystać. <span className="tk-pervert">Istnieje opcja, umożliwiająca edycje bezpośrednio na tej stronie.. ale niestety mnie na nią nie stać.</span>
          </li>
          <li>
            I kilka innych, których cel zostawiam do rozgryzienia Tobie.
          </li>
        </ul>
        Klikając na przyciski, możesz przełączać się między wybranymi zakładkami. Jeżeli masz malutki ekran <span className="tk-pervert">- i nie tylko ekran -</span> możesz wyłączć wszystkie zakłądki z kodem - w ten sposób w całym okienku będzie widoczny tylko rezultat. Możesz też zrobić na odwrót - jeżeli chciałbyś dokładnie przeanalizować kod - możesz wyłączyć zakładkę rezultat, aby kod był widoczny w całym okienku.
      </div>
      <div class="uk-alert-danger" uk-alert="">
        <h3>Alert tolerancyjny.</h3>
        <p>Czasami zdarza mi się kierować bezpośrednie komunikaty do odbiorcy, które są w formie męskiej, np. "będziesz mógł", "widziałeś" itp. Jeżeli więc jesteś dziewczynką i czuje się z tego powodu dyskryminowana.. to wybacz, ale ze względu na specyfikę języka nie mogę inaczej :3</p>
      </div>
      <PageSwitcher nextURL="/lesson/what-are-forms" nextText="Czym są formularze?" />
    </article>
  </>)
}

export default Introduction
