let age1: any = 24;

age1 = 23;
age1 = true;
console.log(age1); // true
age1 = 'hello'; 
console.log(age1); // hello
age1 = { name: 'luigi'};
console.log(age1); // { name: 'luigi'}

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);

// let ninja = { name: any, age: any}; // Değerlerin tipini tanımlarken '=' kullanılmaz
let ninja: { name: any, age: any}; // ':' kullanılır

ninja = { name: 'yoshi', age: 22}; // Objeye değer atarken '=' kullanılır
console.log(ninja);


