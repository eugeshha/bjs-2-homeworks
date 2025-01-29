"use strict";

function getArrayParams(...arr) {
    if (arr.length === 0) return { min: 0, max: 0, avg: 0 };
    
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = arr.reduce((acc, val) => acc + val, 0);
    let avg = +(sum / arr.length).toFixed(2);
    
    return { min, max, avg };
}

function summElementsWorker(...arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
    let sumEven = 0;
    let sumOdd = 0;
    
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    let sumEven = 0;
    let countEven = 0;
    
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
            countEven++;
        }
    }
    return countEven === 0 ? 0 : +(sumEven / countEven).toFixed(2);
}

function makeWork(arrOfArr, func) {
    let maxResult = -Infinity;
    
    for (let arr of arrOfArr) {
        let result = func(...arr);
        if (result > maxResult) {
            maxResult = result;
        }
    }
    return maxResult;
}

console.log(getArrayParams(1, 2, 3, -5, 10)); 
console.log(summElementsWorker(1, 2, 3, 4, 5)); 
console.log(differenceMaxMinWorker(1, 2, 3, 4, 5));
console.log(differenceEvenOddWorker(1, 2, 3, 4, 5)); 
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6));
console.log(makeWork([[1, 2, 3], [4, 5, 6], [7, 8, 9]], summElementsWorker));