// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  const arrParams = {};

  for(let i = 0; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
    if(max < arr[i]){
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = +((sum / arr.length).toFixed(2));

  arrParams.min = min;
  arrParams.max = max;
  arrParams.avg = avg;

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for(let arr of arrOfArr){
    if(max < func(arr)){
      max = func(arr);
    }
  }
  
  return max
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let minMaxDiff = 0;
  for (let i = 0; i < arr.length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
    if(max < arr[i]){
      max = arr[i];
    }
  }
  minMaxDiff = Math.abs(max - min);
  return minMaxDiff
}
