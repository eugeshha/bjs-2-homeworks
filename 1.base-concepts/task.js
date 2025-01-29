"use strict";

function solveEquation(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    
    if (d < 0) {
        return []; 
    } else if (d === 0) {
        return [-b / (2 * a)]; 
    } else {
        return [
            (-b + Math.sqrt(d)) / (2 * a),
            (-b - Math.sqrt(d)) / (2 * a)
        ].sort((x, y) => y - x); 
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = percent / 100 / 12;
    let creditBody = amount - contribution;
    if (creditBody <= 0) {
        return 0;
    }
    let monthlyPayment = creditBody * (monthlyPercent / (1 - Math.pow(1 + monthlyPercent, -countMonths)));
    let totalPayment = (monthlyPayment * countMonths).toFixed(2);
    return Number(totalPayment);
}

console.log(solveEquation(1, -3, 2)); 
console.log(solveEquation(1, 2, 1));  
console.log(solveEquation(1, 0, 1));  

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 48));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36)); 

if (typeof module !== "undefined" && module.exports) {
    module.exports = { solveEquation, calculateTotalMortgage };
}
