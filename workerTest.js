//Test of worker threads on my system

const myWorker = []
if (window.Worker) {
  for (let i = 0; i<4; i++) {
    myWorker[i] = new Worker("worker.js");
    let num2 = i*i;
    myWorker[i].postMessage(JSON.stringify(i), JSON.stringify(num2));
    myWorker[i].onmessage = function(event) {
      console.log(`Worker says range is ${JSON.parse(event.data)}`);
    }
  }
}else {
  console.log('Your browser doesn\'t support web workers.');
}