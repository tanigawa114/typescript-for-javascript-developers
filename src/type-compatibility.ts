export {};

// 互換性がある
// *******************
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

// 互換性がない
// *******************
let fooIncompatible: string;
let barIncompatible: number;

// fooIncompatible = barIncompatible;

// 互換性がある
// *******************
let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 互換性がある
// *******************
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

// 互換性がある
// *******************
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'HamSan');

// **********************************************
// 構造的部分型 : メンバとその型が同じだと互換性がある
// **********************************************
