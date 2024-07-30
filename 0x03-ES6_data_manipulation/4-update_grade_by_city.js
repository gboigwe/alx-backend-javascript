/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
    .filter(student => student.location === city)
    .map(student => {
    let grade = newGrades.find(grad => grad.studentId === student.Id);
    return { ...student, grade: (grade && grade.grade) || 'N/A' };
  });
}
