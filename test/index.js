var itParam = require('../src/index').itParam;
var expect = require('chai').expect;


describe("Calling itParam in a loop sync with a value", function () {
    itParam("should all pass", [1, 1, 1], function (value) {
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
