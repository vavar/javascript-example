var arr = ['a','b','c','d','e','f','g'];


// arr.forEach(function (value, index, brr) {
//   console.log( value , index, brr);
// });

var afFilter = arr

.filter( function( value ) {
  return value !== 'a' && value !== 'f';
})

.map(function(value) { } )

.sort(function(a,b){});

// var isAlllowercase = arr.every(function(value){
//   return value !== 'a';
// });

var x = 10;
var map = arr.map( function(value){
  return { name: value , num: x };
});

console.log( map );