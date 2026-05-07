"use strict";
/*
Is a number odd or even — without using %
*/
let bolen = 2;
let bolunen = 6;
let bolumSonucu = bolunen / bolen;
if (bolumSonucu == Math.floor(bolumSonucu)) {
    console.log(bolumSonucu);
    console.log(bolunen + " is even");
}
else {
    console.log(bolunen + " is odd");
}
//original number - (Math.floor(result) × 2)
