const colorConsoleLog = text => console.log(`%c ${text} `, 'background: #222; color: #FFA945');
const emptyLineConsoleLog = () => console.log('\n');

const itemsList = document.querySelector('ul');

colorConsoleLog('< 1 > PYTANIE: Ile wynosi itemsList.childNodes.length ??');
console.log('itemsList.childNodes.length: ', itemsList.childNodes.length);
console.log('itemsList.childNodes: ', itemsList.childNodes);
emptyLineConsoleLog();

colorConsoleLog('< 2 > PYTANIE: Ile wynosi itemsList.children.length ??');
console.log('itemsList.children.length: ', itemsList.children.length);
console.log('itemsList.children: ', itemsList.children);
emptyLineConsoleLog();

colorConsoleLog('< 3 > PYTANIE: Co znajdzie sie gdy wywolamy itemsList.firstChild ??');
console.log(itemsList.firstChild);
emptyLineConsoleLog();

const firstItem = document.querySelector('li'); // pierwszy element z listy
colorConsoleLog('< 4 > PYTANIE: czy mozliwe jest dostanie sie z poziomu dziecka do rodzica ??');
console.log('itemsList === firstItem.parentNode: ', itemsList === firstItem.parentNode);
emptyLineConsoleLog();

colorConsoleLog('< 5 > PYTANIE: w jaki sposob dostac sie z poziomu pierwszego elementu z listy do nastepnego elementu ??');
console.log('ODPOWIEDZ PIERWSZA: ', document.querySelector('li:nth-child(1)'));
console.log('ODPOWIEDZ DRUGA: ', firstItem.nextElementSibling);
console.log('ODPOWIEDZ TRZECIA: ', firstItem.nextSibling);
emptyLineConsoleLog();

colorConsoleLog('< 6 > PYTANIE: jak otrzymac ostatni element z listy (trzeci element z listy) ??');
console.log('ODPOWIEDZ PIERWSZA: ', document.querySelectorAll('li')[2]);
console.log('ODPOWIEDZ DRUGA: ', document.querySelector('li:nth-child(3)'));
console.log('ODPOWIEDZ TRZECIA: ', document.getElementsByTagName('li').last);
emptyLineConsoleLog();

colorConsoleLog('< 7 > PYTANIE: Jak pobrac tytul strony ?? Tag <title>');
console.log('ODPOWIEDZ PIERWSZA: ', document.title.innerText);
console.log('ODPOWIEDZ DRUGA: ', document.querySelector('title').innerText);
console.log('ODPOWIEDZ TRZECIA: ', document.querySelectorAll('title').innerText);
emptyLineConsoleLog();

colorConsoleLog('< 8 > PYTANIE: Co bedzie przechowywane w nizej wymienionych ?? NodeList, Array, HTMLCollection, Object');
console.log(document.getElementsByClassName('header'));
console.log(document.querySelectorAll('.header'));
console.log(document.querySelector('.header'));
console.log(document.getElementsByTagName('p'));
emptyLineConsoleLog();

colorConsoleLog('< 9 > PYTANIE: Co zwroci warunek textContent === innerText ??');
const header = document.querySelector('.header');
const textContent = header.textContent;
const innerText = header.innerText;
console.log(textContent === innerText);
console.log(textContent);
console.log(innerText);
emptyLineConsoleLog();

colorConsoleLog('< 10 > ZABAWA: usun DISPLAY: NONE dla tagu SPAN - linia 12 w index.html i powtorz powyzsze zadanie z warunkiem.');
console.log("extContent === innerText zwraca false jeżli zostawi się spację za Header albo true jeżeli w p zostawi się samo Header")

colorConsoleLog('< 11 > PYTANIE: W jaki sposob bys zmiane wartosci wlasciwosci zapisal za pomoca JS ?? \n SPAN domyslnie ma \'display: inline\', a mozna skorzystac z wartosci \'unset\' by przywrocic do domyslnych.');
emptyLineConsoleLog("plan dodania class unHide nie zadziałał");

const blockquote = document.getElementsByTagName('blockquote');
const element = document.getElementById('element');
colorConsoleLog('< 12 > PYTANIE: czy te zmienne sa sobie rowne ??');
//console.log('blockquote === element: ', blockquote === element);
emptyLineConsoleLog();

// Uporzadkowanie wiedzy: https://kursjs.pl/kurs/dom/dom.php