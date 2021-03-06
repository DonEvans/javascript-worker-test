//This tests the speed of a computer by finding all the prime numbers under a 
//certain value. It is designed to use multiple threads
//It tests every odd integer (evenes are not prime) up to a maximum value
//For each candidate it finds the square root and then tests every odd number
//less than the square root

//Prepare to send resultsto webpage
document.addEventListener("DOMContentLoaded", function() {
  let resultField = document.querySelector("#resultField");


//Set prime count to 4 because 2,3,5 and 7 are prime.
//Start prime finding algorithm at 9
let primeCount1 = 4;
const START = 9;
const MAX = 4000000;

let startDate = new Date();
let startTime = startDate.getTime();


//Receive message from function and extract results
let results = primeCounter(START, MAX, startTime);
primeCount1 += results[0];


  //Record finish time
  let finishTime = new Date().getTime();
  let runtime = (finishTime - startTime);  

  let resultMessage = "Counting all primes under " + MAX; 
  resultMessage += " found " + primeCount1 + " primes in " + runtime + " milliseconds.";
  console.log(resultMessage);
  resultField.innerHTML = resultMessage;
});

function primeCounter(min, max, startTime) {
  //Range is set by parameters
  //In loop, test each number in a given range to see if it is prime
  //Don't need to test evens so ensure minimum value is odd
  //then increment by 2
  if (min%2 == 0) {
    min+=1;
  }
  let primeCount2 = 0;
  for (let i = min; i<=max; i+=2) {
    let candidate = i;

    //Find square root for each number in range
    let sqrt = Math.sqrt(i);
    let isPrime = true;
    //Test for prime by dividing candidate by every odd integer 
    //less than the square root

    for (let j=3; j<=sqrt; j+=2) {

      //Move to next if candidate divisible
      if (candidate%j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      primeCount2++;
    }
  }
  //Make and return results array with number of primes and runtime
  let threadRunTime = new Date().getTime() - startTime;
  let results = [primeCount2, threadRunTime];
  return results;
}



