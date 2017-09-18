class Person{
    public firstname:string;
    enumerable:boolean = true;
    configurable:boolean = true;
    get getFirstname(){
        return this.firstname;
    }
    set setFirstname(value:string){
        this.firstname = value;
    }
}
var person = new Person();
person.firstname = "Aman";
console.log(person.firstname);