console.log("**********8**********");

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getNameAndUppercaseSurname() {
        return this.name + " " + this.surname.toUpperCase();
    }

    getInitials() {
        return this.name.charAt(0) + "." + this.surname.charAt(0) + ".";
    }
}

const person = new Person('Jan', 'Nowak');
const me = new Person('Weronika', 'Mirek');

console.log(person.getNameAndUppercaseSurname());
console.log(person.getInitials());