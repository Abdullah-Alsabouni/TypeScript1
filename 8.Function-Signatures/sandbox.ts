// let greet: Function,

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => { // greeting: number olsaydı hata verirdi. Üsttteki tanımlamayı sağlamalı
    console.log(`${name} says ${greeting}`);
}

// example 2 

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if( action === 'add'){
        return numOne + numTwo;
    } else { // else koşulu olmasaydı hata verir çünkü fonksiyon number dönmeli
        return numOne - numTwo;
    }
}

let result = calc(12, 13, 'add');

console.log(result);

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
    console.log()
}