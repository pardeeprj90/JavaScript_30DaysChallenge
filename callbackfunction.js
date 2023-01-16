// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
// greet('Pardeep', callMe);

function modifyArr(arr,arrValue, callbackFunc)
{
    arr.push(arrValue)
    console.log(`new value after adding new element to Array ${arr}`)
    callbackFunc()
}
var arr=[1,45,67]
var valToAdd = 100

modifyArr(arr,valToAdd,callMe)