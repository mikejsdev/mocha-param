# Mocha param

## Parameterized tests for Mocha.

```
npm install --save-dev mocha-param
```
# New in Version 2.0.0

- The tested value can now be included in the description for each test.
- Optionally use require('mocha-param') rather than require('mocha-param').itParam;


# Basic Usage

Simply use 'itParam' instead of the standard mocha 'it' function and pass in an array of data.

```javascript
var itParam = require('mocha-param');
// We have used chai as an assertion library but you can use any.
var expect = require('chai').expect;

// A Simple sync example taking an array as a parameter.
// 'value' is each value in the array
describe("basic mocha test with data", function () {
    itParam("test value is a number", [1, 2, 3], function (value) {
        expect(value).to.be.a('number');
    })
})
```

Result:

```
 basic mocha test with data
    ✓ test value is a number
    ✓ test value is a number
    ✓ test value is a number


  3 passing (25ms)
```

# Add the values being tested into the test descriptions

To display the values being passed into your tests, use "${value}" as part of the test description.

```javascript
describe("basic mocha test with data", function () {
    itParam("test value ${value} is a number", [1, 2, 3], function (value) {
        expect(value).to.be.a('number');
    })
})
```

Result:

```
 basic mocha test with data
    ✓ test value 1 is a number
    ✓ test value 2 is a number
    ✓ test value 3 is a number


  3 passing (25ms)
```

# Async

Standard async mocha tests take a 'done' parameter which is called when execution is finished.
mocha-param works the same.

```javascript
// A Simple async example taking an array and calling done()
// 'value' each value in the array
// 'done' is the standard mocha done callback
describe("async mocha test with data", function () {
    itParam("test value ${value} is a number", [1, 2, 3], function (done, value) {
        expect(value).to.be.a('number');
        done();
    })
})
```

Result:

```
  async mocha test with data
    ✓ test value 1 is a number
    ✓ test value 2 is a number
    ✓ test value 3 is a number


  3 passing (17ms)
```

# Array Objects

The array can contain anything that you like. Nested values to be displayed in the test description can be accessed with `${value.<property>}`

```javascript
var myData = [{ name: 'rob', age: 23 }, { name: 'sally', age: 29 }];

describe("test that person objects are older than 20", function () {
    itParam("test person ${value.name} (age ${value.age}) in the array", myData, function (person) {
        expect(person.age).to.be.greaterThan(20);
    })
})
```

Result:

```
  test that person objects are older than 20
    ✓ test person rob (age 23) in the array
    ✓ test person sally (age 29) in the array


  2 passing (14ms)
```
