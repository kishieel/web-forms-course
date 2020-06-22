import React from 'react'
import PageSwitcher from '../theme/PageSwitcher'
import CodePen from '../theme/CodePen'

const FormDesign = ( ) => {
  return (<>
    <article id="content" className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Jak układać formularze?</h3>
      <p>Odkąd na przełomie ostatniej dekaty brzydkie strony internetowe wyszły z mody, wśród osób odpowiedzialnych za ich tworzenie zapanował haos i dziesiątki bibliotek mających na celu sprawić aby nasze strona była jednocześnie piękna i szybkie. W polu zainteresowań takich bibliotek znajduje się również wygląd formularzy. Zanim jednak zaczniemy korzystać ze wspomagaczy warto nauczyć się samodzielnie układać formualrze. W tym celu mogę zaproponować Ci dwa sposoby:</p>
      <p><span className="tk-code">&lt;table&gt;</span> &ndash; znacznik ten umozliwia tworzenie tabel, które - jak zapewne się domyślasz - zbudowane są z wierszy i kolumn. Każdy wiersz <span className="tk-code">&lt;tr&gt;</span> i każdą komórkę <span className="tk-code">&lt;td&gt;</span> możemy scalać z innymi dzięki czemu możeby zbudować dowolną strukturę dla naszego formularza.</p>
      <div>
        W przypadku korzystania z tabelki najważniejsze będą dla nas dwa atrybuty znacznika <span className="tk-code">&lt;td&gt;</span>
        <ul class="uk-list uk-list-hyphen uk-list-collapse uk-margin-remove-top">
          <li>
            <span class="tk-code">colspan</span> &ndash; pozwala określić rozpiętość komórki w poziomie
          </li>
          <li>
            <span class="tk-code">rowspan</span> &ndash; pozwala określić rozpiętość komórki w poziomie
          </li>
        </ul>
        Korzystając z podanych wyżej atrybutów wraz z kilkoma dyrektywami css możemy tworzyć ciekawe struktury odpowiedzialne za przechowywanie naszych kontrolek.
      </div>
      <div className="uk-margin-small-top uk-overflow-auto">
        <table className="tk-example-table">
          <tr>
            <td><input type="text" className="uk-input uk-form-small" placeholder="Imię"/></td>
            <td><input type="text" className="uk-input uk-form-small" placeholder="Nazwisko"/></td>
            <td colspan="2"><input type="text" className="uk-input uk-form-small" placeholder="Adres zamieszkania"/></td>
          </tr>
          <tr>
            <td>Płeć:</td>
            <td><input type="radio" id="gender" name="gender" className="uk-radio"/> Chłopczyk</td>
            <td><input type="radio" id="gender" name="gender" className="uk-radio"/> Dziewczynka</td>
            <td><input type="radio" id="gender" name="gender" className="uk-radio"/> Coś innego :3</td>
          </tr>
          <tr>
            <td>Typ muzuki?</td>
            <td><input type="checkbox" id="music" name="music" className="uk-checkbox"/> Regge</td>
            <td colspan="2" rowspan="3">
              Ulubione jedzonko?
              <select className="uk-select" multiple>
                <option>Marchewki</option>
                <option>Marcheweczki</option>
                <option>Marchewusie</option>
                <option>Marchwinki</option>
                <option>Marchwisie</option>
                <option>Karotki</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" id="music" name="music" className="uk-checkbox"/> Pop</td>
            <td><input type="checkbox" id="music" name="music" className="uk-checkbox"/> Rock</td>
          </tr>
          <tr>
            <td><input type="checkbox" id="music" name="music" className="uk-checkbox"/> Folk</td>
            <td><input type="checkbox" id="music" name="music" className="uk-checkbox"/> Rap</td>
          </tr>
        </table>
      </div>
      <p><span className="tk-code">CSS Grid</span> &ndash; to sposób układania treści zdefiniowany w CSS, dzięki któremu możemy stworzyć siatkę i wyrównać elementy HTML do ustawionych kolumn i wierszy. Zdecydowaną przewagą tego rozwiązania nad tabelką jest to jak łatwo można go dostosować do wymiarów urządzenia, na którym otwierana jest nasza strona. Jeśli chcesz zobaczyć o co mi chodzi zamknij kartę <span className="tk-code">HTML</span> w poniższym pinie i zobacz jak zmienia się wygląd formularza opartego na grid'dzie w zależności od szerokości karty. <span className="tk-pervert">Jeśli domyślasz się, że mówię tu o RWD to brawo - sprytna z Ciebie bestia :3</span></p>
      <p>Wykonanie czegoś takiego wymaga trochę wiedzy i sprytu, ale aby umilić Ci naukę grid'a polecam zagrać w tą <a href="https://cssgridgarden.com">grę</a> i pobuszować trochę w <a href="https://developer.mozilla.org/pl/docs/Web/CSS/CSS_Grid_Layout">dokumentacjach</a>.</p>
      <CodePen pen="vYLXwXr" title="web-forms-course/form-design" height={ 600 }/>
      <div className="uk-alert-primary" uk-alert="">
        <h3>ZADANIE BOJOWE !!!</h3>
        <p>Wybierz jedną z opcji, które tu podałem lub wymyśl własną i stwórz formularz, który będzie zbierał dane niezbędne poczcie polskiej do wysłania twojej paczki - przyda się do następnych lekcji :3</p>
      </div>
      <PageSwitcher previousURL="/lesson/input-types" previousText="Rodzaje znacznika input"
        nextURL="/lesson/form-validation-html" nextText="Walidacja formularzy w HTML" />
    </article>
  </>)
}

export default FormDesign
