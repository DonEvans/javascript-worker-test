//Worker test
onmessage = function(event) {
  let range = JSON.parse(event.data);
  let msg = `Worker: Message received from main script: ${range[0]} and ${range[1]}`;
  console.log(msg);
  
  let num2 = range[0];
  postMessage(JSON.stringify(num2));
}