/*
Write a function that takes in a binary string and 
returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.
The input string will always be a valid binary string.
Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: 
  In the case of an empty binary string your function should return an empty string.
*/


// Solution

function binaryToString(binary) {
  return binary.replace(/[01]{8}/g, function(v) {
    return String.fromCharCode(parseInt(v,2));
  });
}

// or

function binaryToString(binary) {
  let arr = [];
	if (binary.length){
  	for (let i = 0; i < binary.length; i += 8) {
    	arr.push(binary.substr(i, 8));
    }
  	return arr.map(s => String.fromCharCode(parseInt(s, 2))).join('');
  }
  return '';
}