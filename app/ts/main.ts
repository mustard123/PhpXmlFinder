function hello(user: string) {
    console.log(`Hello from ${user}`);
}
hello("TypeScript");

class Student implements GreetAble{
    getGreeting(): string {
       return this.firstName + " " + this.middleInitial + " " + this.lastName
    }

    private fullName:string;
    constructor(private firstName: string, private middleInitial: string, private lastName: string){
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
    private age: number;

    getAge():number{
        return this.age;
    }

    setAge(age:number):void{
        this.age = age;
    }


}

interface GreetAble{
    getGreeting():string;

}

function greeter(person: GreetAble){
    return "Hello " + person.getGreeting();

}

let user = new Student("Silas", "D", "Weber");

document.getElementById('greeting').innerText = greeter(user);

console.log(user.getAge())
$(function(){
    console.log('cool stuff');
})

$.get('/php/response.php?q=01276')