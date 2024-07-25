/* eslint-disable no-unused-vars */
/* eslint-disable */
export default class HolbertonCourse {
	constructor(name, length, students) {
		this.name = name;
		this.length = length;
		this.students = students;
	}
	get name() {
		return this._name;
	}
	set name(value) {
		if (typeof !== 'string'){
			throw new Error();
		}
		this._name = value;
	}

	get length() {
		return this._length;
	}
	set length(value) {
		if (typeof !== 'numbers') {
			throw new Error();
		}
		this._length = value;
	}

	get students() {
		return this._students;
	}
	set students(value) {
		if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
			throw new Error()
		}
		this._students = value;
	}
}
