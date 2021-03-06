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


//Make workers (Javascript threads) in loop
const myWorker = [];
let message = [];
for (let i=0; i<threadCount; i++) {
  console.log("Thread made!");
  myWorker[i] = new Worker("worker.js");
  let range = [START, MAX, startTime];
  myWorker[i].postMessage(JSON.stringify(range) );

  myWorker[i].onmessage = function(event) {
    //Receive message from thread and extract results
    let results = JSON.parse(event.data);
    let primeCount = results[0];
    let runtime = results[1];
    console.log(`Worker says ${primeCount} primes found in ${runtime} seconds.`);

/* OLD CODE
  thread[i] = new Worker('primeCounter.js');
  thread[i].postMessage("Hello from thread" + i);
  //Listen for messages from completed threads and post to console
  thread[i].onmessage = function(event) {
    message[i] = event.data;
    console.log("Thread message:" + message[i]);
    */

    primeCount1 += primeCount;
    threadDone.push(true);

    if (threadDone.length === threadCount) {
      //Record finish time
      let finishTime = new Date().getTime();
      let runtime = (finishTime - startTime)/1000;  //Get runtime in seconds

      console.log(primeCount1 + " primes found in " + runtime + " seconds.");
    }

  }
}

/*
//Wait for worker threads to finish
while (threadDone.length < threadCount){
  setTimeout(function() { return true; }, 20)
}
*/

//Record finish time
let finishTime = new Date().getTime();
let runtime = (finishTime - startTime)/1000;  //Get runtime in seconds

console.log(primeCount1 + " primes found in " + runtime + " seconds.");




