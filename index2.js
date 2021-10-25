/**
 * Created by A151166 on 08/06/2016.
 * Array functions
 */
var numbers = [2,4,6];
var evens = numbers.filter(function (ele, index, arr) {
    return  ele%2===0;
});

var odds = numbers.filter(function (ele, index, arr) {
    return  ele%2!==0;
});

var odds = numbers.filter( (ele) => ele%2!==0);
//console.log(odds);

var allEvens = numbers.every(v => v%2==0);
var sum = numbers.reduce(function (p, s) {
      return p+s;
});
var sum = numbers.reduce( (p, s) =>  p+s);
console.log(sum);
