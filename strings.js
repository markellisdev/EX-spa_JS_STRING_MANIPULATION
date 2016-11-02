var textIn = document.getElementById("input");


function verify() {
	console.log("verifyFunction", textIn.value);
	if (textIn.value.match(/([0-9])+/g)) {
		alert("Please enter only letters.");
	}
	else {
		testString = textIn.value;
		console.log("testString", testString);
		reversal(testString);
		alphabits(testString);
	}
}

function reversal(string) {
    return (string === '') ? '' : reversal(string.substr(1)) + string.charAt(0);
}
    console.log("dwayne", reversal('dwayne'));

function alphabits(string) {
	console.log("alphabits");
	return (testString.split(","));
	console.log("split", alphabits(testString));

}

// function palindrome() {

// }

var testString = "This is a test string";

// Why does this not work
// var testString = textIn.value;


reversal(testString);
// alphabits(testString);
// palindrome(testString);

// Event Listeners

document.getElementById("setValue").addEventListener("click", verify);

// The text input should only accept letters. No numbers.


// In your HTML, create an text input and a button.
//
//
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
//
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
//
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
//
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
//
// The output of each of the functions should immediately appear as well.


// Recursion - String.charAt and String.substr methods are being used to pass through a different value by calling itself each time until the string is empty
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

// console.log("dwayne", reverseString('dwayne'));