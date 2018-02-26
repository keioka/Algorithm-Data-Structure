function factorial (input) {
  if (input === 1) {
    return 1
  }
  return input + factorial(input - 1)  
}

console.log(55 === factorial(10))
console.log(15 === factorial(5))
