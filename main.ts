export {};

function givesMax(arr : any){
  let max = arr.reduce((a :any, b:any) => {
    return Math.max(a, b);
  })
  return max
}

function newArray(oldArray, newArray, maxNumber){
  let indice = oldArray.indexOf(maxNumber)
  oldArray.splice(indice,1)
  return newArray.push(maxNumber)
}


let ages : number[] = [1,5,87,45,8,8];
let maxArray : number[] = [];

let max1 = givesMax(ages)

let firstArray = newArray(ages,maxArray,max1)

let max2 = givesMax(ages)

let secondArra = newArray(ages,maxArray,max2)

console.log(maxArray.reverse());
