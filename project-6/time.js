setInterval(()=>{
const div= document.getElementById("time");
const currenttime= Date.now()
console.log(currenttime);
const olympictime = new Date(2028,6,14).getTime()      //getTime() returns the number of milliseconds since January 1, 1970, 00:00:00 UTC

let countdown = olympictime-currenttime 

const days = Math.floor((countdown)/(1000*60*60*24));
countdown%=1000*60*60*24;
const hours = Math.floor((countdown)/(1000*60*60));
countdown%=(1000*60*60);
const minutes = Math.floor((countdown)/(1000*60));
countdown%=(1000*60);
const seconds = Math.floor((countdown)/(1000));

const result = `${days}:Days ${hours}:Hours ${minutes}:Minutes ${seconds}:Seconds`;
div.textContent = result

},1000)