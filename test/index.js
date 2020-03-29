var itParam = require('../lib/index');

var expect = require('chai').expect;


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
