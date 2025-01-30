/**
 * @param {string} value 
 * @returns {number} 
 * @throws {Error} .
 */
function parseCount(value) {
    const result = Number.parseFloat(value);
    if (Number.isNaN(result)) {
      throw new Error("Невалидное значение");
    }
    return result;
  }
  
  /**
   * @param {string} value
   * @returns {number|Error}
   */
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }
  
  // ------------------- Задача №2 -------------------
  
  /**
   */
  class Triangle {
    /**
     * @param {number} a - сторона A.
     * @param {number} b - сторона B.
     * @param {number} c - сторона C.
     * @throws {Error}
     */
    constructor(a, b, c) {
      if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    /**
     * @returns {number}
     */
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    /**
     * @returns {number} 
     */
    get area() {
      const p = this.perimeter / 2;
      const areaValue = Math.sqrt(
        p * (p - this.a) * (p - this.b) * (p - this.c)
      );
      return +areaValue.toFixed(3);
    }
  }
  
  /**
   * @param {number} a - сторона A.
   * @param {number} b - сторона B.
   * @param {number} c - сторона C.
   * @returns {Triangle|object} 
   */
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (e) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
  }