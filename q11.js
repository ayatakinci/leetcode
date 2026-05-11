"use strict";
/*
Q11. Find the second largest number in an array
Given [3, 7, 2, 9, 1], return 7.
*/
let numbers3 = [3, 7, 2, 9, 8];
let firstBiggestsoFar = numbers3[0]; //3
let secondBiggestsoFar = numbers3[1]; //7
if (firstBiggestsoFar < secondBiggestsoFar) { // slot 1 is supposed to always be the biggest so far. otherwise Now slot 2 is bigger than slot 1. That's already wrong
    firstBiggestsoFar = numbers3[1]; //7
    secondBiggestsoFar = numbers3[0]; //3
}
for (let i = 2; i < numbers3.length; i++) {
    if (numbers3[i] > firstBiggestsoFar) { //i=3: 9 is bigger than 7 → slot1 becomes 9, slot2 becomes 7 ✓
        secondBiggestsoFar = firstBiggestsoFar; //9
        firstBiggestsoFar = numbers3[i]; //7
    }
    else if (numbers3[i] > secondBiggestsoFar) {
        secondBiggestsoFar = numbers3[i];
    }
}
console.log(secondBiggestsoFar);
