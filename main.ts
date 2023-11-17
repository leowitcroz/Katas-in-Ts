let number = "1652";

function isNarcist(num) {
  let base = num.length;

  let separateNumber = number.split('')

  let newNumber = 0
  for (let i =0 ; i< separateNumber.length; i++){
    newNumber += parseInt(separateNumber[i]) ** base
  }

  if(newNumber == parseInt(num)){
    return true
  }else{
    return false
  }

}

console.log(isNarcist(number));
