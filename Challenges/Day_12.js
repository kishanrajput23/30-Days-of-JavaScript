/*
## Challenge 12
Write a JavaScript program to create a clock.
Note: The output will come every second.
Expected Console Output:
"14:37:42"
"14:37:43"
 "14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
*/

function displayClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  
  var formattedTime = hours + ":" + minutes + ":" + seconds;
  console.log(formattedTime);
}

// Display the clock every second
setInterval(displayClock, 1000);
