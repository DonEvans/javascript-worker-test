//This tests the speed of a computer by finding all the prime numbers under a 
//certain value. It is designed to use multiple threads
//It tests every odd integer (evenes are not prime) up to a maximum value
//For each candidate it finds the square root and then tests every odd number
//less than the square root


//Set prime count to 4 because 2,3,5 and 7 are prime.
//Start prime finding algorithm at 9
let primeCount1 = 4;
const START = 9;
const MAX = 4000000;
//The next two values, thread count and problem sections, have to be set together.
//They specify the number of threads and how the work is divided
const threadCount = 1;
//Make array to specify which range of values each thread is reponsible for
const problemSections = [START, MAX];
//Add flag to array when threads reach the end of their loops
let threadDone = [];
let startDate = new Date();
let startTime = startDate.getTime();

/*
//Make workers (Javascript threads) in loop
let thread = [];
let message = [];
for (let i=0; i<threadCount; i++) {
  thread[i] = new Worker('primeCounter.js');
  thread[i].postMessage("Hello from thread" + i);
  //Listen for messages from completed threads and post to console
  thread[i].onmessage = function(event) {
    message[i] = event.data;
    console.log("Thread message:" + message[i]);
  }
}
*/

//Return prime count and runtime in a results array
//This can be turned into multithreaded code later
let results = primeCounter(START, MAX, startTime);
primeCount1 += results[0];
//Record finish time
let finishTime = new Date().getTime();
let runtime = (finishTime - startTime)/1000;  //Get runtime in seconds

console.log(primeCount1 + " primes found in " + runtime + " seconds.");



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
  //Write runtime to console before returning to main
  console.log("Thread working from " + min + " to " + max+ " finished in " + threadRunTime);
  return results;
}
