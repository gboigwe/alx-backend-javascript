/* eslint-disable no-unused-vars */
/* eslint-disable */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Symbol to store the class identification
  static get [Symbol.species]() {
    return this;
  }

  // Method to clone the car
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
