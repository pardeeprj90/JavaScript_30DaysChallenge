let emp={
    name_:"Padeep kumar",
    age:"32",
    Occupation:"Software Testing"
}

// Destructuring
// let{name_,age,Occupation}=emp

// if suppose you want to rename column name to somethoing else during destructuring you can do that
let{name_:Naam,age:umr,Occupation:kaam}=emp
console.log(Naam)

// console.log(name_)
console.log(umr)