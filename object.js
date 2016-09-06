var x = { 
  prefix: 'hello', 
  suffix: 'world'
}

x.info = 'information';
x.sayHello = function(){
  console.log(this.prefix, this.suffix);
}

x.prefix = 'Hi';
x.sayHello();

