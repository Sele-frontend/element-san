let expect = require("chai").expect;
let Util = require("../src/util");
/**
 * canary test
 */
describe('util tests',function(){
    it('should pass this canary test',function () {
        expect(true).to.eql(true);
    })
})

describe("util test 2",function () {
    var util;

    beforeEach(function () {
        util = new Util();
    })

    it("should pass if fc2 returns 0C for 32F",function () {
        var fahreheit = 32;
        let callback = function (count) {
           expect(count).to.eql(0);
        }
        util.promise_test()
            .then(result=>callback(result));
    })
})