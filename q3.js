"use strict";
/*
Q3. Count characters in a string — without .length
Given a string like "hello", count how many characters it has by going through it one by one.
*/
let arr = "hello";
let counter = 0;
for (let i = 0; arr[i] !== undefined; i++) {
    counter = counter + 1;
    console.log(counter);
}
