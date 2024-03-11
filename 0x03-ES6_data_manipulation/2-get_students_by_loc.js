export default function getStudentsByLocation(students, city) {
  const studentInCity = students.filter((student) => student.location === city);
  return studentInCity;
}
