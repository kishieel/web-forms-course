import React from 'react'
import { Link } from 'react-router-dom'
import PageSwitcher from '../theme/PageSwitcher'
import CodePen from '../theme/CodePen'

const FormElements = ( props ) => {
  return (<>
    <article className="uk-card uk-card-default uk-card-body">
      <h3 className="uk-card-title">Elementy formularza</h3>
      <p>Jak wspomniałem w poprzednim rozdziale największą siłą formularzy są tak zwane kontrolki, które umożliwiają odbieranie danych od użytkownika. Najciekawszymi z nich są w zasadzie trzy, które opisałem poniżej. Jeżeli jednak jesteś bardzo dociekliwy i chciałbyś poznać resztę znaczników związanych z formularzami, to zachęcam to sprawdzenia tego <a href="https://www.w3schools.com/html/html_form_elements.asp">linku</a>.</p>
      <p><span className="tk-code">&lt;input&gt;</span> &ndash; to najpopualrniejsza i dostarczająca najwięcej możliwości kontrolka. W najprostszym przypadku jest zwykłym polem tekstowym, jednak dzięki swojemu atrybutowi<span className="tk-code"> type </span> może przyjmować dane w wielu różnych formatach. Informacji o tym zanczniku jest na tyle dużo, że poświęciłem mu w całości osobną <Link to="/lesson/input-types">lekcję</Link>. <span className="tk-pervert">Jeżeli jesteś niecierpliwy to możesz ją sprawdzić już teraz :D</span></p>
      <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@m uk-child-width-1-2@s">
        <div><input className="tk-input" type="text" style={{ width: '100%', marginBottom: 10 }} placeholder="Całkiem zwykłe pole tekstowe.."/></div>
        <div><input className="tk-input" type="date" style={{ width: '100%', marginBottom: 10 }}/></div>
        <div><input className="tk-input" type="time" style={{ width: '100%', marginBottom: 10 }}/></div>
        <div className="uk-text-center"><input className="tk-input" type="button" style={{ width: '50%', marginBottom: 10 }} value="Przyciśnij Sobie"/></div>
        <div><input className="tk-input" type="range" style={{ width: '100%', marginBottom: 10 }}/></div>
        <div><input className="tk-input" type="file" style={{ width: '100%', marginBottom: 10 }}/></div>
      </div>
      <p><span className="tk-code">&lt;select&gt;</span> &ndash; to rozwijana lista wyboru, która umożliwia wybranie jednej lub kilku z pośród dostępnych opcji. Domyślnie możemy wybrać tylko jeden element z listy, kiedy jednak dodamy atrybut<span className="tk-code"> multiple </span>umożliwimy użytkownikom wybranie dowolnej ilości opcji</p>
      <p>Ze znacznikiem <span className="tk-code">&lt;select&gt;</span> związany jest inny znacznik &ndash; <span className="tk-code"> &lt;option&gt;</span>, który służy do przechowywania wartości możliwych do wyboru.</p>
      <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s">
        <div className="uk-text-center">
          <select className="tk-input" style={{ width: '100%', maxWidth: 300, marginBottom: 10 }}>
            <option>Jabłko</option>
            <option>Marcheweczka</option>
            <option>Pietrucha</option>
          </select>
        </div>
        <div className="uk-text-center">
          <select className="tk-input" style={{ width: '100%', maxWidth: 300, marginBottom: 10, height: 60 }} multiple>
            <option>Jabłko</option>
            <option>Marcheweczka</option>
            <option>Pietrucha</option>
            <option>Banan</option>
            <option>Snickers</option>
          </select>
          <p style={{ margin: 0, paddingLeft: 30, paddingRight: 30, fontSize: '80%' }}>
          Aby zaznaczyć więcej niż jedną opcje przytrzymaj <span className="tk-code">CTRL</span> podczas wybierania
          </p>
        </div>
      </div>
      <p><span className="tk-code">&lt;textarea&gt;</span> &ndash; to wieloliniowe pole tekstowe, które pozwala na wygodne wprowadzenie dużej ilości tekstu. Atrybut <span className="tk-code">rows</span> określa ile wierszy tekstu powinno być widoczne.</p>
      <div className="uk-text-center">
        <textarea className="tk-input" style={{ width: '90%', maxWidth: '100%', minWidth: '50%', minHeight: 60 }} rows={ 5 } placeholder="Możesz tu opisać co ciekawego Cię dziś spotkało.."></textarea>
      </div>
      <br/>
      <CodePen url="https://codepen.io/tomaszkisiel/embed/jOWrZjw?height=265&theme-id=dark&default-tab=html,result"
        title="web-forms-example/form-elements" />
      <div className="uk-alert-primary" uk-alert="">
        <h3>ZADANIE BOJOWE !!!</h3>
        <p>Korzystając ze zdobytych w tej lekcji informacji spróbuj stworzyć formularz wykorzystujący wszyskie kontrolki, oraz ich atrybuty. Dodatkowe informacje na temat znacznika <span className="tk-code">&lt;input&gt;</span> możesz znaleźć <a className="uk-link" href="https://www.w3schools.com/html/html_form_input_types.asp">tutaj</a>. Bądź kreatywny - powodzenia!</p>
      </div>
      <PageSwitcher previousURL="/lesson/what-are-forms" previousText="Czym są formularze?"
        nextURL="/lesson/input-types" nextText="Rodzaje znacznika input" />
    </article>
  </>)
}

export default FormElements
