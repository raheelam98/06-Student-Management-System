class Institute {
    insName: string;
    students: Student[] = [];

    // Method to register a student
    addStudent(objStudent: Student) {
        this.students.push(objStudent);
    }

    constructor(insName: string) {
        this.insName = insName;
    }
}

class Student {
    id: string;
    name: string;

    constructor(id: string, stname: string) {
        this.id = id || this.generateUniqueId();
        this.name = stname;
    }

    // Function to generate a 5-digit unique student ID
    private generateUniqueId() {
        const randomId = Math.floor(10000 + Math.random() * 90000);
        return randomId.toString();
    }
}

const objstu1 = new Student("", "Akbar");
const objstu2 = new Student("", "Asma");

console.log(objstu1);
console.log(objstu2);

// function customUniqueIdGenerator(id: number) {
//     const stuid1 = ("" + Math.random()).substring(2, 7);
//     return id + stuid1;
// }

// const objstu3 = new Student(customUniqueIdGenerator(12345), "John");
// console.log(objstu3);