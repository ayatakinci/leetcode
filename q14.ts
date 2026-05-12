/*
Capitalize the first letter of every word in a sentence
Given "hello world from typescript", return "Hello World From Typescript"
*/
let lowerCase:string="hello world from typescript";//. A string already lets you access each character by index, just like an array
let upperCase:string=""

for(let i=0; i<lowerCase.length;i++){
    if(i=== 0){
        upperCase=lowerCase[i].toUpperCase()
    }
    else if(lowerCase[i-1]=== " "){// If lowerCase[i-1] is a space → mena i the current character is the first letter of a new word → capitalize it
         upperCase= upperCase+lowerCase[i].toUpperCase()

    }else{//Otherwise → just add it as is
       upperCase= upperCase+ lowerCase[i]

    }
}
console.log(upperCase)