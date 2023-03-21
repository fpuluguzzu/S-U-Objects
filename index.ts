console.log('hello world')
console.log('hi')

//Interface

interface Iundergrad {
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    gpa: number;
}

let student:Iundergrad[] = [
    { name: "Rishita", age: 25, gender: "Female", nationality: "US", batch:4, gpa:3 },
    { name: "Rishab", age: 20, gender: "Female", nationality: "Uk", batch:4, gpa:3},
    { name: "Jenny", age: 29, gender: "Female", nationality: "Canada",batch:4, gpa:3 },
    { name: "Jason", age: 22, gender: "Female", nationality: "India",batch:4, gpa:3 },
    { name: "Eva", age: 26, gender: "Female", nationality: "US",batch:4, gpa:3 },
];

class Student {
    name: string;
    age: number;
    gender: string;
    nationality: string;


    constructor(studName: string, studAge: number, studGender: string, studnationality: string) {

        this.name = studName;
        this.age = studAge;
        this.gender = studGender;
        this.nationality = studnationality;
        
    }

    
}

//child class

class UnderGraduates extends Students implements Iundergrad {
    
    batch: number;
    gpa:number;

    constructor(studName: string, studAge: number, studGender: string, studnationality: string, batch: number, gpa: number,) {
        super(studName, studAge, studGender, studnationality);
        this.batch = batch;
        this.gpa = gpa;

    }

    //method
    getNationality() {
        console.log(`Nationality: ${this.nationality}`);
    }
}


let student1 = new UnderGraduates ("Rishita", 25, "female", "US", 4, 3);
let student2 = new UnderGraduates ("Jenny", 29, "female", "Canada", 4, 3);
console.log(student1.getNationality());
console.log(student2.getNationality());