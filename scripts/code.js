function exLoop() {
	for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
		alert(i);
	}
}

function add() {
	const text = "The result is: "; // A string variable that cannot be reassigned.
	let summary; // A real variable with the data set as undefined
	var x = 14; // an assigned variable with the value of 14.
	var y = 7;

	// assigns the variable "summary" the data of "text" and the result of x + y
	// Should show "The result is: 21"
	summary = text + (x + y);
	alert(summary);
}

const x = 40; // sets a constant variable with a value of 40
function constEx() {
	try {
		x = 21; // tries to set the value of x to 21
	} catch (something) {
		alert(something);
	} // catches the result and then shows it
	// should show an error message

	alert("The number is: " + x); // after the error message it should show the text "The numbger is: 40"
}

function embedEx1() {
	alert("Example 1");
}

function embedEx2() {
	alert("Example 2");
}

function myFunction() {
	alert("Thank you for clicking on me!");
}

function dMake() {
	var x = 10;

	if (x >= 18) { // if the number x is more or equal to 18 then run this path, if not then skip.
		return alert("Accepted!");
	} else if (x >= 15) { // if the number x is more or equal to 15 then run this path, if not then skip.
		return alert("So close, but not there!");
	} else { // if nothing returns true, then do this.
		return alert("Too young!");
	}
}

// a function to call out another function
function functionEx() {
	example(9, 10);
}

function example(a, b) {
	return alert(a + b); // Adds the number 9 and 10 to get 19
}

function decrement() {
	balls.splice(0, 1);
}

function increment() {
	balls.push(new Ball(positionX, positionY, 20));
}


function hide() {
	if (document.getElementById("gameCanvas").style.display == "none") {
		document.getElementById("gameCanvas").style.display = "block";
	} else {
		document.getElementById("gameCanvas").style.display = "none";
	}
}

var ranOnce = 0;

function backChange() {
	let elements = document.getElementsByClassName('box2'); // get all elements
	if (ranOnce == 0) {
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.backgroundColor = "white";
		}
		ranOnce++;
	} else {
		for (let i = 0; i < elements.length; i++) {
			elements[i].style.backgroundColor = "";
		}
		ranOnce--;
	}
}