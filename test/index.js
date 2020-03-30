var itParam = require('../lib/index');
var itParamOld = require('../lib/index').itParam;

var expect = require('chai').expect;


describe("Using old-style import", function () {
	itParamOld("should all pass", [1, 1, 1], function (value) {
		expect(value).to.equal(1);
	})
});

describe("Calling itParam in a loop sync with a value", function () {
    itParam("should all pass", [1, 1, 1], function (value) {
        expect(value).to.equal(1);
    });
});

describe("Calling itParam with objects works", function () {
    itParam("should all pass", [{ data: 1 }, { data: 1 }, { data: 1 }], function (value) {
        expect(value.data).to.equal(1);
    });
});

describe("Values are printed in description", function () {
    itParam("value is: ${value}", [1, 1, 1], function (value) {
        expect(value).to.equal(1);
    });
});

describe("Calling itParam in a loop sync without a value", function () {
    itParam("should all pass", [1, 1, 1], function () {
        expect(1).to.equal(1);
    });
});

describe("Calling itParam in a loop Async with a done function and a value", function () {
    itParam("should all pass", [1, 1, 1], function (done, value) {
        expect(value).to.equal(1);
        done();
    });
});

describe("Calling itParam in a loop Async with values in description", function () {
    itParam("values are: ${value} ", [1, 1, 1], function (done, value) {
        expect(value).to.equal(1);
        done();
    });
});

describe("Object literal in description should work", function () {
    itParam(`should pass`, [1, 1, 1], function (done, value) {
        expect(value).to.equal(1);
        done();
    });
});

describe("Context inside callback", function () {
	beforeEach(function() {
		this.customValue = 1;
	});
	
	itParam('should be accessible (sync)', [1], function(value) {
		expect(this.customValue).to.equal(1);
	});
	
	itParam('should be accessible (async)', [1], function(done, value) {
		expect(this.customValue).to.equal(1);
		done();
	});
});

describe("Test function utilities", function () {
	it('should exist', function () {
		expect(itParam.retries).to.exist;
		expect(itParam.skip).to.exist;
		expect(itParam.only).to.exist;
	});
	
	it('should exist (old import)', function () {
		expect(itParamOld.retries).to.exist;
		expect(itParamOld.skip).to.exist;
		expect(itParamOld.only).to.exist;
	});
	
	itParam.skip('should be skipped', [1], function(value) {
		throw new Error('Test was not skipped');
	});
});
