function revStr(str){
    var reversedStr='';
    for(var i=str.length-1; i>=0 ;i--) {
        reversedStr+=str[i];
    }
    return reversedStr
}

// const reversedString = revStr('Pardeep')
// console.log(reversedString)

// To Check whether number is prime or not?

function isPrime(number)
{
    const number1 = parseInt(number);
    let isPrime=true

    if(number===1){
        console.log(`${number} is not prime nor composite`)
    }
    else if(number>1){
        for (let i=2; i<number; i++){
            if(number%i==0){
                isPrime=false;
                break;
            }
        }
    }
    if(isPrime)
    {
        console.log(`Entered number ${number} is prime number`)
    }
    else{
        console.log(`Entered number ${number} is not prime number`)
    }

}
// isPrime(3)

// Print fibonacci series

function printFibonacciSeries(number)
{
    const number1=parseInt(number)
    let n1 = 0,n2 = 1, n3
    console.log("Fibonacci series: ")
    for(let i=1;i<=number1; i++)
    {
        console.log(n1)
        n3=n1+n2
        n1=n2
        n2=n3
    }
}

// printFibonacciSeries(10)

function factorial(number)
{
    const num1 = parseInt(number)
    if (num1<0)
    {
        console.log('Error! Factorial for negative number does not exist.');
    }
    else if (number === 0) 
    {
        console.log(`The factorial of ${number} is 1.`);
    }
    else
    {
        var fact = 1;
        for(let i = 1; i<= num1 ;i++)
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

factorial(5)