//Worker test
onmessage = function(event) {
  console.log('Worker: Message received from main script');
  let num1 = JSON.parse(event.data[0]);
  let num2 = JSON.parse(event.data[1]);
  let result = num1 + num2;
  postMessage(JSON.stringify(result));
}