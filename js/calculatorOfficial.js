/*eslint-env browser*/

//Listen for the Click events on any button

//Tell the Browser what button was clicked and add its' value to the DOM
var $ = function (id) {
	"use strict";
	return window.document.getElementById(id);
};

function getTheValue(e) {
	"use strict";
	if (e.currentTarget.value === "0") {
		$("result").value += 0;
	} else if (e.currentTarget.value === "1") {
		$("result").value += 1;
	} else if (e.currentTarget.value === "2") {
		$("result").value += 2;
	} else if (e.currentTarget.value === "3") {
		$("result").value += 3;
	} else if (e.currentTarget.value === "4") {
		$("result").value += 4;
	} else if (e.currentTarget.value === "5") {
		$("result").value += 5;
	} else if (e.currentTarget.value === "6") {
		$("result").value += 6;
	} else if (e.currentTarget.value === "7") {
		$("result").value += 7;
	} else if (e.currentTarget.value === "8") {
		$("result").value += 8;
	} else if (e.currentTarget.value === "9") {
		$("result").value += 9;
	} else if (e.currentTarget.value === "+") {
		$("result").value += "+";
	} else if (e.currentTarget.value === "-") {
		$("result").value += "-";
	} else if (e.currentTarget.value === "*") {
		$("result").value += "*";
	} else if (e.currentTarget.value === "/") {
		$("result").value += "/";
	} else if (e.currentTarget.value === "=") {
		var output = eval($("result").value);
		$("result").value = output;
	} else if (e.currentTarget.value === "clear") {
		$("result").value = " ";
	}
	
}


function init(e) {
	"use strict";
	//Declarations
	var clicked, buttons, i;
	buttons = window.document.getElementsByTagName("input");
	clicked = e.currentTarget.value;
	
	// ----------------------------------------------------------------------------------------------------------------------------------	
	$("one").addEventListener("click", getTheValue);
	for (i = 0; i < buttons.length; i += 1) {
		buttons[i].addEventListener('click', getTheValue);
	}
	document.body.addEventListener('click', getTheValue);

}
	
//Start The script once the page loads
window.addEventListener("load", init);
//Get the value of the item just clicked on 

//Evaluate the Expression once the Equals button is clicked
	


	

	