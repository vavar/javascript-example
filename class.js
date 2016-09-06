var Greeting = function(name){
  this._name = name;
}

Greeting.prototype.sayHello = function (){
  console.log( 'Hello' , this._name);
}

var greeter = new Greeting('World'); 
// greeter.sayHello();

// console.log( typeof greeter );
// console.log( greeter instanceof String );


var x = { name: 'xxxx' } ;


console.log( x.name );

x.name = null;

console.log( x.name );
console.log( Object.keys(x).length );

console.log( (x.name) ? 'yes' : 'no');

delete x.name;
console.log( Object.keys(x).length );

console.log( (x.name) ? 'yes' : 'no');
