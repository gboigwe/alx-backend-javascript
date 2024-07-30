/* eslint-disable no-unused-vars */
/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable */
let newGrades = {
  studentId: 31,
  grade: 78,
}
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents
		.filter(student => student.location === city)
		.map(student => {
			let gradeS = newGrades.find(grad => grad.studentId === student.Id);return { ...student, gradeS: (gradeS && gradeS.gradeS) || 'N/A' };
		});

}
