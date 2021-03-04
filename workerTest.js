//Test of worker threads on my system

const myWorker = []
if (window.Worker) {
  for (let i = 0; i<4; i++) {
    myWorker[i] = new Worker("worker.js");
    myWorker[i].postMessage(10, 20);
   myWorker.onmessage = function(event) {
      console.log(`Worker says range is ${event.data}`);
    }
  }
}else {
  console.log('Your browser doesn\'t support web workers.');
}