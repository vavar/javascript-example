//(function(){ ... })();

var ET;
(function(et){

  var version = 1.0;

  function getVersion(){
    return ''+version;
  }

  function checkVersion() {

  }
  et.checkVersion = checkVersion;
  
  function upgradeServicePack() {
    et.checkVersion();
    version += 0.1;
  }

  
  function upgradeServicePackX() {
    version += 0.5;
  }

  function release() {
    version = Math.round( version + 0.5);
  }

  
  et.getVersion = getVersion;
  et.upgradeServicePack = upgradeServicePackX;
  et.release = release;

})(ET || (ET={}));


(function(gateway){
  function sayHi(){
    console.log( 'sayHi');
  }

  gateway.sayHello = sayHi;
})(ET.Gateway || (ET.Gateway = {}));


(function(gateway){
  function sayWelcome(){
    console.log( 'sayWelcome');
  }
  gateway.sayWelcome = sayWelcome;
})(ET.Gateway || (ET.Gateway = {}));

module.exports = ET;