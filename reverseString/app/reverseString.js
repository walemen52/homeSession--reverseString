/*
The funtion below returns the reverse of the string argument provided. If the reverse of the string is the same as the original string, as in the case of palindromes, it returns true instead.
*/

'use strict'
let reverseString = (string) => {
	let reverse_string = "";
	let string_len = string.length - 1;

	if (string_len < 0) {
		return null;
	}	
	else {
		for (let i = string_len; i >= 0; i--){
			reverse_string += string[i];
		}
		let counter = 0;
		// it now checks for palindromes
		while(reverse_string[counter]) == string[counter] && counter < string_len) {
			counter++;
		}

		if (counter == string_len) {
			return true;
		}
		else {
			return reverse_string;
		}
	}
}

module.exports = reverseString;