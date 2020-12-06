const codingTest1 = () => {
  // Define parameters
  var numbers = [1,2,3,4,5];

  // A loop to execute odd-even logic and change the values in the array.
  numbers.forEach((item, i) => {
    if(item % 2 === 0){
      numbers.splice(i,1,item*2);
    }else{
      numbers.splice(i,1,item*3);
    }
  });

  // Returns the changed value
  return numbers;
}

// Only for testing purposes, displays results via console log
console.log(codingTest1());
