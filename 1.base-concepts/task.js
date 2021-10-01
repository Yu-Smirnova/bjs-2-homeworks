'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if(d < 0){
    return arr;
  }else if(d == 0){
    let x = -b/(2*a);
    arr.push(x);
  }else{
    let x1 = (-b + Math.sqrt(d) )/(2*a);
    arr.push(x1);
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if(typeof(percent) != 'number'){
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  if(typeof(contribution)!= 'number'){
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } 
  if(typeof(amount)!= 'number'){
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  const floatPersent = percent /100;
  const creditBody = amount - contribution;
  const dateFrom = new Date();
  const dateTo = new Date(date);
  const creditLenght = dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
  const monthlyPayment = creditBody * ((floatPersent/12) + (floatPersent/12) / (((1 + (floatPersent/12))**creditLenght) - 1));
  totalAmount = +((monthlyPayment * creditLenght).toFixed(2));
  return totalAmount;
}
