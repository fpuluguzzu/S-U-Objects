var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello world');
console.log('hi');
var students = [
    { name: "Rishita", age: 25, gender: "Female", nationality: "US", batch: 4, gpa: 3 },
    { name: "Rishab", age: 20, gender: "Female", nationality: "Uk", batch: 4, gpa: 3 },
    { name: "Jenny", age: 29, gender: "Female", nationality: "Canada", batch: 4, gpa: 3 },
    { name: "Jason", age: 22, gender: "Female", nationality: "India", batch: 4, gpa: 3 },
    { name: "Eva", age: 26, gender: "Female", nationality: "US", batch: 4, gpa: 3 },
];
var Students = /** @class */ (function () {
    function Students(studName, studAge, studGender, studnationality) {
        this.name = studName;
        this.age = studAge;
        this.gender = studGender;
        this.nationality = studnationality;
    }
    return Students;
}());
//child class
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(studName, studAge, studGender, studnationality, batch, gpa) {
        var _this = _super.call(this, studName, studAge, studGender, studnationality) || this;
        _this.batch = batch;
        _this.gpa = gpa;
        return _this;
    }
    //method
    UnderGraduates.prototype.getNationality = function () {
        console.log("Nationality: ".concat(this.nationality));
    };
    return UnderGraduates;
}(Students));
var student1 = new UnderGraduates("Rishita", 25, "female", "US", 4, 3);
var student2 = new UnderGraduates("Jenny", 29, "female", "Canada", 4, 3);
console.log(student1.getNationality());
console.log(student2.getNationality());
