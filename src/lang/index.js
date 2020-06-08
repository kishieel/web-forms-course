const translations = {
  "PLN": {
    "header": "Kurs formularzy HTML",
    "footer": "Projekt i wykonanie : Tomasz Kisiel 2020",
    "lesson-1-title": "Czym są formularze?",
    "lesson-2-title": "Rodzaje formularzy.",
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
    "lesson-1-title": "What are forms?",
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
