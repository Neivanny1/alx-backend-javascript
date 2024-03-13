// Define Director class implementing DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Define Teacher class implementing TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Define createEmployee function
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return "Teacher";
    }
    else {
        return "Director";
    }
}
// Test createEmployee function
// Output: Teacher
console.log(createEmployee(200));
// Output: Director
console.log(createEmployee(1000));
// Output: Director
console.log(createEmployee('$500'));
