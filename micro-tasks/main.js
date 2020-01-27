// 1. Łączenie ciągów stringów. Chciałabym, aby funkcja przyjmowała dwa
// parametry: imię oraz nazwisko. Następnie zwróciło mi jeden ciąg znaków.
// a. Zapisz to w jednej linii kodu.
// b. ‘a’ i ‘b’ to nie są dobre nazwy argumentów.
// c. Nie chce zobaczyć symbolu ‘+’.
// d. Nie chce zobaczyć słowa ‘return’.
// e. Argumenty: “Jan”, “Kowalski”. Wynik: “Jan Kowalski”.
// f. Nie przejmujemy się, że argumenty mogą być pustymi ciągami znaków.


let Jan = "Jan";
let Kowalski = "Kowalski";
let cheat = " ";
let merging = (name, surname) => `${name} ${surname}`
console.log(merging(Jan, Kowalski));


// 2. Warunek trochę inaczej. Chcę sprawdzić czy podane dwa parametry są
// równe. Zatem napiszemy funkcję. Ha! Jeśli są równe to zwracana jest wartość
// ‘1’, a jeśli nie to ‘-1’. Zakładamy, że parametry to tylko wyłącznie liczby (ale
// możesz pobawić się z różnymi typami i ==/===).
// a. Jednolinijkowa funkcja to moje marzenie.
// b. Nie chce zobaczyć ‘if’.


let compar = (input, expectedInput) => input === expectedInput ? 1 : -1;
console.log(compar(10, 10));


// 3. Kiedy jedyna konsola w domu to... Teraz pobawimy się z Switch’em.
// Stwórz prostą funkcję.
// a. Funkcja przyjmuje jeden parametr: kolor - ‘czerwony’, ‘zielony’, …
// b. Funkcja ma zwrócić dany kolor za pomocą wartości hex, z
// wykorzystaniem switch (przynajmniej cztery ‘case’, gdzie jeden ma być
// podwójny).
// c. Jeśli kolor nie zostanie dopasowany to chce dostać ‘#FFFFFF’.
// d. ‘break’ jest zakazany.
// e. Jeśli mamy jeden parametr to ograniczamy ilość nawiasów ‘(‘ oraz ‘)’
// do minimum.


// Nie miałem pomysłu jak to zrobić na switch bez użycia "break";
// let Picasso = (input) => input === "red" ? "#db3236" : "#fff" || input === 'green' ? "#3cba54" : "#fff" || input === 'blue' ? "#4885ed" : "#fff" || (input === 'orange' || input === 'yellow') ? "#4885ed" : "#fff";
// console.log(Picasso("yellow"));


let color = "orange";

function Vinci(input) {
    switch (input) {
        case "red":
            return ("#db3236");
        case "blue":
            return ("#4885ed");
        case "green":
            return ("#3cba54");
        case "yellow":
        case "orange":
            return ("#f4c20d");
        default:
            return ("#fff");
    }
}
console.log(Vinci(color))

// || color === 'blue' ? console.log("#4885ed") || color === 'yellow' ? console.log("#f4c20d") 

// 4. Undefined! Chciałabym mieć piękną jednolinijkową funkcję, która przy
// podaniu wartości 1 dostaje 2, a jeśli nie podam parametru to też dostanę 2.
// a. Podany parametr jest pomnożony przez 2, czyli dla parametru 2
// dostajemy 4, 3 to 6, ...
// b. Fajnie byłoby nie zobaczyć return.
// c. Nie lubię nagle warunków.


let mitoza = (numberInput = 2) => numberInput * 2
console.log(mitoza(4))