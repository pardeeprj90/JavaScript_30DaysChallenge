
// Program 1- Write a program to add 2 numbers and print the result on the console.
function addTwoNumbers(a,b){
    let num1 = a
    let num2 = b
    let sum = num1+num2
    console.log(`Addition of two number ${a} & ${b} is ${sum}`)
}

addTwoNumbers(30,40)


// Program 2- Write a program to Subtract 2 numbers and print the result on the console.
function SubtractTwoNumbers(a,b){
    let num1 = a
    let num2 = b
    let substraction = num1 - num2
    console.log(`Substraction of two numbers ${a} & ${b} is ${substraction}`)
}

SubtractTwoNumbers(30,40)

// Program 3- Write a program to display student results. If the number is below 50 then print fail and if the number is above 50 then pass.

function displayStudentResults(studentNumber)
{
    if (studentNumber < 50) {
        console.log('FAIL')
    }
    else{
        console.log("PASS")
    }

}

displayStudentResults(30)

/* Program 4- Program 4- Write a program to display student results. 
	If number above 90 then grade A
	If number above 70 and below 90 then grade B
    If number above 50 and below 70 then grade C
    If number below 70 then Fail
*/

function displayStudentResult(studentNumber){
    if (studentNumber >90){
        console.log("Grade A")
    }else if(studentNumber > 70 , studentNumber< 90){
        console.log("Grade B")
    }
    else if(studentNumber > 50 , studentNumber< 70){
        console.log("Grade C")
    }else{
        console.log("Fail")
    }
}

displayStudentResult(78)

/*
Program 5- Write a function that takes 3 numbers as arguments and perform multiplication 
of the numbers and returns the output. 
*/

const prompt = require("prompt-sync")();
function multiplicationOfThreeNumbers(){
    let num1 = prompt("Please enter 1st number:- ")
    let num2 = prompt("Please enter 2nd number:- ")
    let num3 = prompt("Please enter 3rd number:- ")
    const multiplication = num1 * num2 * num3
    console.log(multiplication)
}

multiplicationOfThreeNumbers()
