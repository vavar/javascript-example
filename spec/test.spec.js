var ET = require('../iife.js');

describe("ET", function () {



  describe('when upgradeServicePack()', function () {
    var spyFunction

    fit('getVersion should be 1.5', function () {
      expect(ET.getVersion()).toEqual('1.5');
      expect(spyFunction).toHaveBeenCalled();
      expect(spyFunction).toHaveBeenCalledWith()
      spyFunction.calls.
    });

    describe('and then released()', function () {
      it('getVersion should be 2', function () {
        expect(ET.getVersion()).toEqual('2');
      });
    });
  });

});