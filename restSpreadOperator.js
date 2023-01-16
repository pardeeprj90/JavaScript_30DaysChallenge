// Rest and Spread operator introduced in ES6 version.
// Manily Rest and Spread operators are used in Array and Objects.

// Rest Operator:- Purpose:- To handle extra parameters
 function addNumbers(a,b,c,...otherNumbers){
    return a+b+c;

 }

 const res =addNumbers(2,4,6,2,45,67)
 console.log(res)