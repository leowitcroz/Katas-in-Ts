"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function givesMax(arr) {
    var max = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });
    return max;
}
function newArray(oldArray, newArray, maxNumber) {
    var indice = oldArray.indexOf(maxNumber);
    oldArray.splice(indice, 1);
    return newArray.push(maxNumber);
}
var ages = [1, 5, 87, 45, 8, 8];
var maxArray = [];
var max1 = givesMax(ages);
var firstArray = newArray(ages, maxArray, max1);
var max2 = givesMax(ages);
var secondArra = newArray(ages, maxArray, max2);
console.log(maxArray.reverse());
