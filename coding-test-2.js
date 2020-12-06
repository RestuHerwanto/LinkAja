const isFibo = (val, count = 1, next = 0) => {

  // Fibonacci formulas, adding two previous consecutive numbers
  if(count < val){
    return isFibo(val, count + next, count);
  }

  // If the entered value is Fibonacci
  if(count === val){
    return true;
  }
  return false;
}

// Only for testing purposes, displays results via console log
console.log(isFibo(8));
console.log(isFibo(9));
