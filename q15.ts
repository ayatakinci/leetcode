/*
 Find the most frequent element in an array
Given [1, 2, 2, 3, 3, 3, 4], return 3.
*/
let numbersArray:number[] = [1, 2, 2, 3, 3, 3, 4];
let mostFrequent:number = 0
let whichNumber:number =0

let counts: {
    [key: number]:number
}={}

for(let i=0; i<numbersArray.length; i++){
    if(counts[numbersArray[i]]=== undefined){
        counts[numbersArray[i]] = 1
    }else{
        counts[numbersArray[i]] = counts[numbersArray[i]] + 1
    }
}

 
for(let key in counts){
    if(mostFrequent < counts[key]){
    mostFrequent= counts[key]
    whichNumber= Number(key)
}

}console.log(mostFrequent)
console.log(whichNumber)