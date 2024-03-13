// Define the interface for Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Array containing the students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
    const table = document.createElement('table');
    
    // Create header row
    const headerRow = table.insertRow();
    const header1 = headerRow.insertCell(0);
    const header2 = headerRow.insertCell(1);
    header1.textContent = 'First Name';
    header2.textContent = 'Location';

    // Append rows for each student
    studentsList.forEach(student => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });

    document.body.appendChild(table);
}

// Call renderTable to render the table
renderTable();
