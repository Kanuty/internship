// #1 - done
// if (true) {
//     var a = 1;
//     let b = 2;
//     const c = 3;
// }
// console.log(a, b, c); // b and c are undefined (scope differnce)

// #2 - done
// var a = 1;
// var a = 2;
// console.log(a); // a == 2. later var overwrite earlier. With let it return "variable already deffined". Same with let;var and var;let

// #3 - done
// Do Date napisz funckje, ktora wyswietli dzien tygodnia w jezyku polskim. (uzyj funkcji .getDay())
 // I didn't thought earlier that it is possible to use function in place of a index if it return a number... hmm and what about string like "3"? Ok it worked :D;
let day = new Date();
let lenghtOption = { weekday: 'short'}; // { weekday: 'long'};
console.log(new Intl.DateTimeFormat('pl-PL', lenghtOption).format(day));
// Nie mam pojęcia jak to zrobić z .getDay()   ಠ╭╮ಠ


// console.log(show, tydzien[test]);

// #4 - done
// Co to jest deklaracja zmiennej? A inicjalizacja zmiennej? Podaj przyklady.
// declaration of variable: let stark;
// initialisation of variable: stark = 3000;


// #5 - done 
// let a = 2;
// let b = a++
// let c = b++

// console.log(a, b, c); // Ok this is cool a == 3; b == 2
// let d = b-- & a-- & a--;
// console.log(a,b,c,d)

// #6 - done
// Co wyswietli podany kod?
// var a;
// console.log(a); // emm undefined? Yup, undefined.

// #7 - done
// Dla jakich zmiennych pojawi sie blad? No i dlaczego?
// function xyz() {
//     var a = 1;
//     let b = 2;
//     const c = 3;
    
// }
// console.log(a, b, c); // all of them. variables in a function are private. 

// #8 - done
// Czym jest %? // modulo == a thing that left after division
// let a = 2;
// let b = 10 % a;
// console.log(b); // 0

// #9 - done
// let a = 1;
// let a = 2;
// console.log(a); // a has been already declared

// #10 - done
// console.log(a, b, c);
// var a = 1;
// let b = 2;
// const c = 3; 
//JS read code twice. Firstly it check for variables (that is why it prompt "Cannot acces 'b' before initialization")
//Interestingly enough, console.log(a) do not return error. Oo

// #11 - done
// const x = 'Nana';
// console.log(x.length); // consol.log() will return a lenght of a string where "" == 0, "N" == 1 and so on.

// #12 - done
// let a = [1, 2, 3];
// let b = a;
// a[0] = 2;
// console.log(b); // I have thought that b  = [1, 2, 3]... well it seems that arrays are "codependent"... or let a; let b are only a representation of same array? 
// b = [3,4,5];
// console.log(a,b) // Ok, arrays arn't "codependent" after all. In previous ex. b and a were just a 2 different references to the same array. anti-pattern???