// console.log(_string)
// let _string = "This is example of string"
// console.log(_string)

//  To find the length of  a given string use length function
// console.log(_string.length)

/*Extracting String Parts
    There are 3 methods for extracting a part of a string:
        * slice(start, end)
        * substring(start, end)
        * substr(start, length) /this is now deprecated
*/

/* 1) slice() extracts a part of a string and returns the extracted part in a new string.
    The method takes 2 parameters: start position, and end position (end not included).*/
let _string = "This is example of string"

let _substr = _string.slice(0,4)
// console.log(_string)
// console.log(_substr)
// If a parameter is -ve then slicing starts from last index

// console.log(_string.slice(-8))

/* 2) substring() is similar to slice().
    The difference is that start and end values less than 0 are treated as 0 in substring().
    If we omit the second parameter, substring() will slice out the rest of the string. 
*/
// console.log(_string.substring(1,5))

// console.log(_string.substring(-1,6))

/* Replacing String Content
    The replace() method replaces a specified value with another value in a string:
    replace() methods doesn't alter original value
    The replace() method replaces only the first match
    If you want to replace all matches, use a regular expression with the /g flag set.
*/

// let text = "I am learning javascript"
// let altered_text = text.replace('learning javascript','learning javascript by practing coding')
// console.log(`original value \"${text}"\ after replacing some text with new \"${altered_text}`)

// javascript concat functions
let text1 ="Hi"
let text2 ="This is Pardeep Kumar, Learning javascript"
let textAfterConcat=text1+' '+text2
// console.log(textAfterConcat)

/* Converting a String to an Array
    If we want to work with a string as an array, you can convert it to an array, 
    A string can be converted to an array with the split() method:
*/
// console.log(text1.split(''))

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"));
