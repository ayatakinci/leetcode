"use strict";
/*
Q1. Swap two variables without a third one
You have a = 5 and b = 10. Swap their values. No let temp.
Nudge: what happens if you add them together first? What does the sum tell you about each number?
*/
let a = 5;
let b = 10;
a = a + b;
console.log(a);
//if a=15
//b=10
b = a - b; //15-10 so b=5 now
console.log(b);
//for a will do 
a = a - b; //so 5-15 which is 10
console.log(a);
