var itParam = require('../lib/index').itParam;
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

describe("Calling itParam in a loop Async with values in description", function () {
    itParam("values are: ${value} ", [1, 1, 1], function (done, value) {
        expect(value).to.equal(1);
        done();
    });
});


