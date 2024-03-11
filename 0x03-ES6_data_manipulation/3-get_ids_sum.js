export default function getStudentIdsSum(students) {
  const sumIds = students.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumIds;
}
