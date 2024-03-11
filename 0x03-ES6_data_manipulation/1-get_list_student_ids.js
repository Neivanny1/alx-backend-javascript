export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentIds = studentList.map((student) => student.id);
  return studentIds;
}
