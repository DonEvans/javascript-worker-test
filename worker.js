//Worker test
onmessage = function(event) {
  console.log('Worker: Message received from main script');
  postMessage('Hello from worker thread!')
}