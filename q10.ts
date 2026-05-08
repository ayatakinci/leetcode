/*
FizzBuzz — the classic
Go through numbers 1 to 100.
If divisible by 3 print "Fizz", by 5 print "Buzz", by both print "FizzBuzz", otherwise print the number.
*/


for(let i=1; i<= 100; i++){
    // if a number is dividecd by 3 without a remiander this is a divisible by 3
    // So by comparing the raw division result with the floored version, you're checking if there was a remainder or not.
    if((i/3=== Math.floor(i/3))&&(i/5=== Math.floor(i/5))) {
        console.log("frizzbuzz")
    }else if(i/5=== Math.floor(i/5))
        {
            console.log("buzz")
        }
           else if(i/3=== Math.floor(i/3))
            { 
                { 
                console.log("frizz")
          
         }
        }
         else {
            console.log(i)
         }
        }
