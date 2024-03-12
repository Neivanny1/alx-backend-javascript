export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);
  if (!Array.isArray(newGrades)) {
    return studentsInCity.map((student) => ({ ...student, grade: 'NA' }));
  }
  return studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });
}
