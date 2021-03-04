//Worker test
onmessage = function(event) {
  let num1 = JSON.parse(event.data);
  console.log('Worker: Message received from main script' + num1);
  
  //let num2 = JSON.parse(event.data[1]);
  //let result = num1 + num2;
  postMessage(JSON.stringify(num1) );
}