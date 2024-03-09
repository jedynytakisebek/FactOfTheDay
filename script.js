const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
	'Słowo „kalendarz” pochodzi od łacińskiego „caledae”, co oznacza pierwszy dzień każdego miesiąca (innymi słowy – pierwszy dzień po nowiu).',
	'Znany nam wszystkim tydzień składający się z 7 dni został wymyślony w starożytnym Babilonie.',
	'Kalendarz chiński ma 12 miesięcy, ale… co pewien czas dodaje się 13 miesiąc!',
	'Pierwszy na świecie sygnalizator stanął 5 sierpnia 1914 roku w Stanach Zjednoczonych na rogu Euclid Avenue i 105. Street East w Cleveland.'
];

const day = new Date();
currentDay.textContent = day.toLocaleString('default', {weekday: 'long'});

const showRandomFact = () => {
    const number = Math.floor(Math.random() * facts.length);
    funFact.textContent = facts[number]
}

showRandomFact()