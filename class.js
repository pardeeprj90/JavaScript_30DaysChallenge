class emp{
    constructor(name,tech,location){
        this.name=name
        this.tech=tech
        this.location=location
    }
    getEmpDetails()
    {
        console.log(`Emp details:- ${this.name} ${this.tech} ${this.location}`)
    }

    setEmail(email)
    {
        console.log(email=email)
    }
}

// let emp1= new emp('Pardeep Kumar,','QA,','Himachal')
// emp1.getEmpDetails()
// emp1.setEmail("pardeep.rj90@gmail.com")

// let emp2= new emp('Parveen,','QA,','Pathankot')
// emp2.getEmpDetails()
// emp2.setEmail("pardeep1.rj90@gmail.com")

export{emp}