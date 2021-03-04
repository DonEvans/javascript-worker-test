//Worker test
onmessage = function(event) {
  let range = JSON.parse(event.data);
  console.log('Worker: Message received from main script ' + range[0] + " : " + range[1]);
  
  let num2 = range[0];
  postMessage(JSON.stringify(num2) );
}