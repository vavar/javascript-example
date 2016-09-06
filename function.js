function BasicTenor(){
  this.tenor = 'SPOT';
  this.valueDate = '11/10/2015';
}

BasicTenor.prototype.toXML = function( comment){
  return '<tenor><name>' + this.tenor +'</name><date>'
          + this.valueDate+'</date><comment>'+ comment +'</comment></tenor>';
}

var basic = new BasicTenor();
// console.log( basic.toXML());

console.log( basic.toXML.call({tenor:'1W',valueDate:'9/5/2016'},'thisisfromCall'));
// console.log( BasicTenor.prototype.toXML.bind({tenor:'1W',valueDate:'thisisHack'})() );
// console.log( basic.toXML.bind({tenor:'Me',valueDate:'Tung'})());
console.log( basic.toXML.apply({tenor:'1W',valueDate:'9/5/2016'},['thisiscomment']));

