
/*
    Variables are like container which hold some values like numbers,arrays, boolean, objects etc.
    let see how variable declared and initialized
*/

var num1 = 10 //this is a variable with name "num1" holding a numbers. to check the type of variable we use typeof

console.log(num1) //this will print the value of num variable on console.
console.log(typeof(num1)) //this is type of Number.

// Java Script is dynamically types language so we can change the varlue of variable at runtime.

num1 ="Pardeep"
console.log(num1) //this will print the value of num variable on console.
console.log(typeof(num1)) //this is type of String as we changed the variable value to a string.

_bool = true //Boolean type of values are true and false in javascript

console.log(typeof (_bool))

/*
    All about {Let, var and Const}
    1) Var is to declare a variable in javascript. it was introduced in Initial version of javascript
    2) Let and Const is introduced in later versions of Javascript.
    2.1) Let & Const are block scoped means to say theie life scan is limited to block only.
    2.2) Const is used to define the variable which needs not to be changed throughout the program.
*/

var a=45;
var b="Test"
let c="harry"
{
    let c = "Blocked scoped variable"
    console.log(c) // this will print the blocked soped value i.e. "Blocked scoped variable"
}
console.log(c) // this will print the value "harry".

const _name = "This is const"
// _name ="Ram" // This will give the error message
console.log(_name)

/*
    Primitive Data types:- there are 7 types of primititive data types
    Objects are key-value pair combinations of key and values
*/

