// Define DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Define Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Define Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Define isDirector function
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Define executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
// Define String literal type named Subjects
type Subjects = 'Math' | 'History';

// Define teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid class';
  }
}

// Test teachClass function
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

// Test executeWork function
// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1000)));