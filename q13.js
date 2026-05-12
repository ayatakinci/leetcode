"use strict";
/*
 Flatten a nested array — without .flat()
Given [1, [2, 3], [4, 5], 6], return [1, 2, 3, 4, 5, 6].
*/
let mixed = [1, [2, 3], [4, 5], 6]; // why we dont decalre this also as numbers string?
let num2 = [];
for (let i = 0; i < mixed.length; i++) { //length?
    if (Array.isArray(mixed[i])) {
        const inner = mixed[i];
        for (let j = 0; j < inner.length; j++) {
            num2.push(inner[j]);
        }
    }
    else {
        num2.push(mixed[i]);
    }
}
console.log(num2);
