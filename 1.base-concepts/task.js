"use strict"
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c; // Вычисляем дискриминант
  
  if (d < 0) {
      return []; // Корней нет
  } else if (d === 0) {
      return [-b / (2 * a)]; // Один корень
  } else {
      return [
          (-b + Math.sqrt(d)) / (2 * a),
          (-b - Math.sqrt(d)) / (2 * a)
      ]; // Два корня
  }
}

// Пример использования
console.log(solveEquation(1, -3, 2)); // Ожидаемый результат: [2, 1]
console.log(solveEquation(1, 2, 1));  // Ожидаемый результат: [-1]
console.log(solveEquation(1, 0, 1));  // Ожидаемый результат: []