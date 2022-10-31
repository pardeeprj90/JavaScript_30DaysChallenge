// Program 1- Write a program to calculate the average of 5 numbers.

function AverageOfNumbers(num1, num2, num3, num4, num5){
    let sum = num1+num2+num3+num4+num5
    average = sum/5
    console.log(average)
}

AverageOfNumbers(1,2,3,4,5)

// Program 2- Write a program to calculate the sum of 5 numbers.

function SumOf5Numbers(num1, num2, num3, num4, num5){
    let sum = num1+num2+num3+num4+num5
    
    console.log(sum)
}

SumOf5Numbers(1,2,3,4,5)

/* 
Program 3- Write a program that accepts 
two strings (firstName and lastName) and print final string on the console.
*/

prompt = require("prompt-sync")()
let firstName = prompt("Enter FirstName ")
let lastName = prompt("Enter lastName ")
let fullName =firstName+' '+lastName
console.log(fullName)

// Program 4- Write a function that accepts interest, principle, and tenure and calculates EMI.

function EMICalculator(){
    const interestRate = prompt("Enter the Interest rate ")
    // find one month interest
    let ir = interestRate/(12*100)

    const principleAmt = prompt("Enter the Principle Amount ")
    const tenure = prompt("Enter the Tenure in Years ")
    let Months = tenure * 12
    
    emi = (principleAmt*ir*Math.pow(1+ir, Months))/(Math.pow(1+ir, tenure)-1)
    return emi
}

// console.log(EMICalculator())

// Program 5- Print even numbers from 0-100

for (let i=0;i<=100;i++)
{
    if(i%2==0){
        console.log(i)
    }
}

// Program 6- Print Odd numbers from 0-100

for (let i=0;i<=100;i++)
{
    if(i%2!==0){
        console.log(i)
    }
}

// Program 7- Create an array of length 5 and store below numbers 
let arr = []
arr.push(1,11,111,222,555)
console.log(arr)

// Program 8- Write a program that creates the below Object.
student = {
    "Name" : "Pardeep Kumar",
    "College Name" : "HIET Shahpur, Himachal Pradesh",
    "Location" : "Dharamshala",
    "PinCode" :"176206",
    "Teacher Details":{
        teacherName:"Anup Rana",
        teacherPhn : "0000000",
        teacherSubjects :["Physics", "Chem"]
    }
} 
console.log(student)