/*
 Remove duplicates from an array — without .filter()
Given [1, 2, 2, 3, 4, 4, 5], return [1, 2, 3, 4, 5].
*/
let numbers5 = [1, 2, 2, 3, 4, 4, 5]
let num:number[] = []
let alredyExists = false

for(let i=0; i<numbers5.length; i++){
    for(let j=0; j<num.length; j++){
        if(numbers5[i] === num[j]){
         alredyExists=true
        }
    }
    if(!alredyExists){
    num.push(numbers5[i])}
    alredyExists=false
}
console.log(num)