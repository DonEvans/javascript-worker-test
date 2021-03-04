//Test of worker threads on my system

if (window.Worker) {
  console.log('Hello');
  const myWorker = new Worker("worker.js");
}else {
  console.log('Your browser doesn\'t support web workers.');
}