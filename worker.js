//Worker test
onmessage = function(event) {
  console.log('Worker: Message received from main script');

  postMessage(event.data[0]);
}