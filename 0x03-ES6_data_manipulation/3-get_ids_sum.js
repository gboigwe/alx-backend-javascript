/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getListStudentIds(getListStudents) {
        return getListStudents.reduce((index, student) => index + student.id, 0)
}
