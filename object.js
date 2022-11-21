// Object Reference Type

// How to create objects
const person= {
    name:"Pardeep Kumar",
    age:"32",
    address:"Shahpur",
    occupation:"IT Professional",
    hobbies:["Playing Cricket","Reading Tech Books","Listening Music"]
}
// console.log(person)
// console.log(person.hobbies)
person.gender="Male"
// console.log(person)
const key="email_address"
person[key]="pardeep.rj90@gmail.com"
// console.log(person)

// how to iterate object?
for(let key in person){
    console.log(`${key}:${person[key]}`)
}