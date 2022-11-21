function myFunction(string) {
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
};
console.log(myFunction('pardeep Kumar'))


function stringReverse(str){
    // str = str.trim();
    var res="";
    for (var i=str.length-1; i>=0; i--){
        res +=str[i]
    }
    return res;
}

console.log(stringReverse('Pardeep Kumar Singh Rajput'))