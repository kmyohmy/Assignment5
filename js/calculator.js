/*eslint-env browser*/
//Helper Function	
var $ = function fnHelper(id) {
		"use strict";
		window.document.getElementById(id);
		return;
	};
function init() {
	"use strict";
//Grab the Numeric Elements from the DOM	
	var one, two, three, four, five, six, seven, eight, nine, outputArea, outputAreaCurrentValue, add, subtract, mult, divide, equals;
	one = $("one").value;
	two = $("two").value;
	three = $("three").value;
	four = $("four").value;
	five = $("five").value;
	six = $("six").value;
	seven = $("seven").value;
	eight = $("eight").value;
	nine = $("nine").value;
	outputArea = $("result");
	outputAreaCurrentValue = outputArea.value;
	
//Additional Evaluation Elements
	add = $("add").value;
	subtract = $("subtract").value;
	mult = $("mult").value;
	divide = $("divide").value;
//
	equals = $("equal");
//The Long Way
	/*var one = window.document.getElementById("one");
	var two = window.document.getElementById("two");
	var three = window.document.getElementById("three");
	var four = window.document.getElementById("four");
	var five = window.document.getElementById("five");
	var six = window.document.getElementById("six");
	var seven = window.document.getElementById("seven");
	var eight = window.document.getElementById("eight");
	var nine = window.document.getElementById("nine");*/

//Store them in an Array so I can grab them
	
//Function to grab the button value and put it in the text box
	function getTheValue(this) {
		
		switch (this) 
			case "one" :
					outputArea.value += one;
					break;
			case "two" :
					outputArea.value += two;
					break;
			case "three" :
					outputArea.value += three;
					break;
			case "four" :
					outputArea.value += four;
					break;
			case "five" :
					outputArea.value += five;
					break;
			case "six" :
					outputArea.value += six;
					break;
			case "seven" :
					outputArea.value += seven;
					break;
			case "eight" :
					outputArea.value += eight;
					break;
			case "nine" :
					outputArea.value += nine;
					break;	
			case "add":
					outputArea.value += add;
					break;
			case "subtract":
					outputArea.value += subtract;
					break;
			case "mult":
					outputArea.value += mult;
					break;
			case "divide":
					outputArea.value += divide;
					break;
		
	}
	
//Evaluate the current value in the Output Box				
function evaluateTheOutput(outputAreaCurrentValue) {
		"use strict";
		var trueOutput = eval(outputAreaCurrentValue);
		outputAreaCurrentValue = trueOutput;
		return outputAreaCurrentValue;	
				
}		
				
//Listen for the Click events on any button
equals.addEventListener("click", evaluateTheOutput);	
window.document.addEventListener("click", getTheValue);
	
}
	
window.document.addEventListener("load", init);
	