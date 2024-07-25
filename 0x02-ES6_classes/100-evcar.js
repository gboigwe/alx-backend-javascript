/* eslint-disable no-unused-vars */
/* eslint-disable */
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override the Symbol.species to return Car
  static get [Symbol.species]() {
    return Car;
  }
}
