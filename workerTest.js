//Test of worker threads on my system

if (window.Worker) {
  const myWorker = new Worker("worker.js");
  myWorker.postMessage("Hello from main!");
  myWorker.onmessage = function(event) {
    console.log("Message received from worker.");
  }
}else {
  console.log('Your browser doesn\'t support web workers.');
}