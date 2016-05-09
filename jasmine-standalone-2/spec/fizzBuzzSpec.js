describe("FizzBuzz", function() {
  var fizzBuzz;

   beforeEach(function() {
     fizzBuzz = new FizzBuzz();
   });

   describe ("multiples of 3", function(){
     it("returns 'fizz' for 3", function() {
       expect(fizzBuzz.play(3)).toEqual("fizz");
     });
   });

   describe ("multiples of 5", function(){
     it("returns 'buzz' for 5", function() {
       expect(fizzBuzz.play(5)).toEqual("buzz");
     });
   });

   describe ("multiples of 15", function(){
     it("returns 'fizzbuzz' for 15", function() {
       expect(fizzBuzz.play(15)).toEqual("fizzbuzz");
     });
   });

   describe ("not multiples of 3, 5 or 15", function(){
     it("returns 4 for 4", function() {
       expect(fizzBuzz.play(4)).toEqual(4);
     });
   });

});
