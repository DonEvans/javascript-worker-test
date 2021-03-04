//This tests the speed of a computer by finding all the prime numbers under a 
//certain value. It is designed to use multiple threads
//It tests every odd integer (evenes are not prime) up to a maximum value
//For each candidate it finds the square root and then tests every odd number
//less than the square root

//This may be node specific, might have to remove
//const {Worker} = require('worker_threads');

//Set prime count to 4 because 2,3,5 and 7 are prime.
//Start prime finding algorithm at 9
let primeCount = 4;
const START = 9;
const MAX = 4000000;
//The next two values, thread count and problem sections, have to be set together.
//They specify the number of threads and how the work is divided
const threadCount = 4;
//Make array to specify which range of values each thread is reponsible for
const problemSections = [START, 1480001, 2440001, 3280001, MAX];
//Add flag to array when threads reach the end of their loops
let threadDone = [];
let startDate = new Date();
let startTime = startDate.getTime();

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