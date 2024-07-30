/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getListStudentIds(getListStudents, city) {
        if (!Array.isArray(getListStudents)) {
                return [];
        }
        return getListStudents.filter((student) => student.location === city)
}
