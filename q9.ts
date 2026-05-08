/*
 Check if a string is a palindrome — without .reverse()
"racecar" reads the same forwards and backwards. How do you detect that?
*/
let word = 'hello'
let left = 0
let right = word.length-1
let palindrome = true
while(left < right){
    if(word[left] === word[right]){
    // this is blank because When the letters match you don't need to do anything
    }
    else
    {
         palindrome= false
         break
    }
        left++
        right--
}
console.log(palindrome)