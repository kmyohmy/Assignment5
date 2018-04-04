/*eslint-env browser*/

//STEP 1
function fnClicked() {
	"use strict";
	window.alert("I have been clicked!");
}
//STEP 2
var button = window.document.getElementById("fnClicked");
button.onclick = function fnClicked() {
	"use strict";
	window.alert("I have been clicked!");

};

//STEP 3
var btnbutton = window.document.getElementById("thisButton");
		
window.document.addEventListener("click", function () {
	"use strict";
	window.alert("I have been clicked!");
	
});

//STEP 4
var btnbutton = window.document.getElementById("thisButton");
		
function thisClicked(id) {
	"use strict";
	window.alert("I have been clicked!");
} );	
	
	btnbutton.addEventListener("click",thisClicked(id));
//STEP 5

function init() {
	var btnbutton = window.document.getElementById("thisButton");
		
	function thisClicked(id) {	
		window.alert("I have been clicked!");
	}	
	
	btnbutton.addEventListener("click",thisClicked(id));
}

window.document.addEventListener("load", init);


//STEP 6
var redirect = window.document.getElementById("redirect")
			
redirect.addEventListener("click", function (e) {	
				
	e.preventDefault();
				
});
//STEP 7

var inputText = window.document.getElementById("text").value;
var button = window.document.getElementById("btnButton");
			
	button.addEventListener("click", function() {
	window.alert("You entered" + inputText + "as your value");
	button.disabled = "true";
			});
//STEP 8
	
	/*Part 8 ON ANOTHER PAGE(Index.html)*/

//STEP 9
	
var btnStart = window.document.getElementById("btnStart");		
var btnStop = window.document.getElementById("btnStop");
var message = window.console.log(“Learning JavaScript is fun!”)

function StartWriting() {
	setInterval(message, 2000);
}
		
function StopWriting() {
	clearInterval(), 2000);
}
		
btnStart.addEventListener("click", StartWriting);	
btnStop.addEventListener("click", StopWriting);	
		

//STEP 10


