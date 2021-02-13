
const normalPerson ={
    firstName: "hasan",
    lirstName: "uddin",
    salary :1500,
    getfullname: function(){
        console.log(this.firstName, this.lirstName);
    },
    dfdhsf : function (amount) {
        this.salary = this.salary-amount;
        return this.salary;
    }
}
normalPerson.dfdhsf(120);
console.log(normalPerson.salary);