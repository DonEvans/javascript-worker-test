//The first section of code handles worker communication with the main thread.
//It passes parameters to the prime counter function which counts the primes
onmessage = function(event) {
  //Extract parameters from JSON message
  let range = JSON.parse(event.data);
  let min1 = range[0];
  let max1 = range[1];
  let startTime1 = range[2];

  let results1 = primeCounter(min1, max1, startTime1);
  
  //Send results back to main thread
  postMessage(JSON.stringify(results1));
}

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