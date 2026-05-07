"use strict";
/*
 Sum all numbers in an array — without .reduce()
Given [1, 2, 3, 4, 5], return
*/
let numbers2 = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < numbers2.length; i++) {
    total = total + numbers2[i];
}
console.log(total);
