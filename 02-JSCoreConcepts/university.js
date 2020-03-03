console.log("**********9**********")

names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        const students = new Students([]);
        this.names.forEach(item => {
            if (item.charAt(0) == letter) {
                students.names.push(item);
            }
        });
        return students;
    }

    sort() {
        const students = new Students([]);
        this.names.forEach(item => students.names.push(item));
        students.names.sort();
        return students;
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(this.names[i]);
        }
        return newArray;
    }
}

students = new Students(names);

console.log(students.get());
console.log(students.sort().get());
console.log(students.startWith('P').get());
console.log(students.startWith('M').sort().get());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



