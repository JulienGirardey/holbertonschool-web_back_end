export default class Car {
  constructor(brand, motor, color) {
    if (brand !== undefined && typeof brand !== "string") {
      throw new TypeError("brand must be a string");
    }
    if (motor !== undefined && typeof motor !== "string") {
      throw new TypeError("motor must be a string");
    }
    if (color !== undefined && typeof color !== "string") {
      throw new TypeError("color must be a string");
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}