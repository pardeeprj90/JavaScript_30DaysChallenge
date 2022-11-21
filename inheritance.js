function Employee(){
    this.name=""
    this.DoWork=function(){
        console.log("Basic work");
    }
    this.attendance=function(){
        console.log("Mark attendance");
    }
}
function Manager(){
    this.cabin="";
    this.DoWork=function(){
        console.log("Manage Employee");
        }
}

var emp = new Employee();
// Manager.prototype = emp;

var man = new Manager();
man.name="Pardeep Kumar"
// man.attendance()
man.DoWork()