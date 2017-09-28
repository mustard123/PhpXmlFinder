function hello(user) {
    console.log(`Hello from ${user}`);
}
hello("TypeScript");
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
    getGreeting() {
        return this.firstName + " " + this.middleInitial + " " + this.lastName;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
function greeter(person) {
    return "Hello " + person.getGreeting();
}
let user = new Student("Silas", "D", "Weber");
document.getElementById('greeting').innerText = greeter(user);
console.log(user.getAge());
$(function () {
    console.log('cool stuff');
});
$.get('/php/response.php?q=01276');
