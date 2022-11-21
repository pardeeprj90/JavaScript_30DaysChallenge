// Write the code to find the vowels

// let data = [1,1,14,6,7,7,9]
// let sum=data.reduce((x,y)=>(x+y))
// console.log(sum)

// let unique=new Set(data)
// console.log(unique)
// console.log([...unique])

// IIFE
// (function(){
//     console.log("Hey There i am learning about IIFE Concept")
// })()

// for (let i = 1; i <= 100; i++) {
//     let f = i % 3 == 0,
//       b = i % 5 == 0;
//     console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
//   }


// var fname= "Army"
// var angam = "Mary"

// function isangram(fname,angam){
//     fname.toLowerCase()
//     angam.toLowerCase()
//     let a=fname.split("").sort().join("")
//     let b=angam.split("").sort().join("")
//     return a===b

// }

// console.log(isangram(fname,angam))

// var arr1 = "john".split('');
// var arr2 = arr1.reverse();
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// Reverse a string

// var str ='pardeep kumar'
// var resversed = str.split('').reverse().join('')
// console.log(resversed)

// function revstr(str){
//     var res=''
//     for (let i=str.length-1;i>=0;i--){
//         res+=str[i]
//     }
//     return res
// }

// console.log(revstr('Army'))

// let a ="Pardeep"
// console.log(a.split('').join(''))
// console.log(a.split('').reverse().join(''))

function revstr(str){
    let str1 =''
    for(let i=str.length-1; i>=0; i--)
    {
        str1+=str[i]
    }
    return str1
}

console.log(revstr('Pardeep'))