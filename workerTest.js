//Test of worker threads on my system

if (window.Worker) {
  const myWorker = new Worker("worker.js");
  myWorker.postMessage("Hello from main!");
}else {
  console.log('Your browser doesn\'t support web workers.');
}