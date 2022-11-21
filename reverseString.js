function revStr(str){
    var reversedStr='';
    for(var i=str.length-1; i>=0 ;i--) {
        reversedStr+=str[i];
    }
    return reversedStr
}

const reversedString = revStr('Pardeep')
console.log(reversedString)