//Worker test
onmessage = function(event) {
  let range = JSON.parse(event.data);
  console.log('Worker: Message received from main script ' + range[0] + " : " + range[1]);
  
  //let num2 = JSON.parse(event.data[1]);
  //let result = num1 + num2;
  postMessage(JSON.stringify(range[0] );
}