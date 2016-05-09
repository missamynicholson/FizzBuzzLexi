var FizzBuzz = function(){};

FizzBuzz.prototype.play = function(number) {
  if(this.isDivisibleBy(number, 15)) {
    return "fizzbuzz";
  } else if  (this.isDivisibleBy(number, 5)) {
    return "buzz";
  } else if (this.isDivisibleBy(number, 3)) {
    return "fizz";
  } else {
    return number;
  }
}

FizzBuzz.prototype.isDivisibleBy = function(number, divisor) {
  return number % divisor === 0
}

var fizzBuzz = new FizzBuzz();

for(var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
