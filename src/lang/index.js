import React from 'react'

const translations = {
  "PLN": {
    "header": "",
    "footer": "",
    "introduction-title": "",

    "lesson-1-title": "",
    "lesson-1-paragraph-1": <></>,
    "lesson-1-paragraph-2": <></>,
    "lesson-1-paragraph-3": <></>,
    "lesson-1-paragraph-4": <></>,
    "lesson-1-paragraph-5": <></>,
    "lesson-1-paragraph-6": <></>,

    "lesson-2-title": "",
    "lesson-3-title": "",
    "lesson-4-title": "",
    "lesson-5-title": "",
    "lesson-6-title": "",
    "epilogue-title": "",
    "not-found-title": "",
    "not-found-what-next": "",
    "not-found-back-home": "",
    "not-found-go-deep": "",
    "not-found-go-real-deep": "",
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
