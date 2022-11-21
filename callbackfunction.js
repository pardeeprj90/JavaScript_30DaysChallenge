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

function modifyArr(arr,arrValue, abc)
{
    arr.push(arrValue)
    abc()
}
var arr=[1,45,67]
var valToAdd = 100

modifyArr(arr,valToAdd,function(){
    console.log(`new array value after pushing new value`,{valToAdd},{arr})
})