/*
Q7. Count how many times a letter appears in a string
Given "hello", count how many times "l" appears.
*/
let str = "hello"
let lett = "l"
let count=0
for (let i=0; i< str.length; i++){
    if(lett=== str[i]){
        count= count+1

    }
}
console.log(count)