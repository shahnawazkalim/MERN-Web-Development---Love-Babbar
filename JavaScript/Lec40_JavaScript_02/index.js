// Data Types : 


// Symbol :- Generate every time unique symbols 
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

console.log(sym2);
console.log(sym3);

console.log(sym2===sym3); //false because each symbol is generated uniquely