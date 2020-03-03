class Person{
    constructor(imie,nazwisko){
        this.imie=imie;
        this.nazwisko=nazwisko;
    }

    zwrocImieINAZWISKO(){
        return imie + nazwisko.toUpperCase();
    }
}

let person = new Person('Jan','Nowak');
let me = new Person('Weronika','Mirek');

console.log("**********8**********");
console.log(person.zwrocImieINAZWISKO());