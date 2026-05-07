"use strict";
/*
Q6. Find the largest number in an array — without .max()
Given [3, 7, 2, 9, 1], find the biggest number.
*/
let numbers = [3, 7, 2, 9, 1];
let comparison = numbers[0];
console.log(comparison);
for (let i = 0; i < numbers.length; i++) {
    if (comparison < numbers[i]) {
        comparison = numbers[i];
    }
}
console.log(comparison);
//array.length starts counting from 1
