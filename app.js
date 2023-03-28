var myText = "I'm Giorgi Beruashvili";

var myArray = myText.split("");

var loopTimer;

function frameLooper() {

if(myArray.length > 0) {

document.querySelector(".title1").innerHTML += myArray.shift();

} else {

clearTimeout(loopTimer);

return false;

}

loopTimer = setTimeout('frameLooper()',150);

}

frameLooper();


