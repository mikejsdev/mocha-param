# Mocha param

## Parameterized tests for Mocha.

```
npm install --save-dev mocha-param
```

# Basic Usage

Simply use 'itParam' instead of the standard mocha 'it' function and pass in some data. 

```javascript
var itParam = require('mocha-param').itParam;
// We have used chai as an assertion library but you can use any.
var expect = require('chai').expect;

// A Simple sync example taking an array as a parameter.
// 'value' is each value in the array
describe("basic mocha test with data", function () {
    itParam("test each value in the array", [1, 2, 3], function (value) {
        expect(value).to.be.a('number');
    })
})

```

Result:

```
 basic mocha test with data
    ✓ test each value in the array
    ✓ test each value in the array
    ✓ test each value in the array


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
    itParam("test each value in the array", [1, 2, 3], function (done, value) {
        expect(value).to.be.a('number');
        done();
    })
})
```

Result:

```
  async mocha test with data
    ✓ test each value in the array
    ✓ test each value in the array
    ✓ test each value in the array


  3 passing (17ms)

```

# Array Objects

The array can contain anything that you like.

```javascript
var myData = [{ name: 'rob', age: 23 }, { name: 'sally', age: 29 }];

describe("an array of objects is passed as a parameter", function () {
    itParam("test each person object in the array", myData, function (person) {
        expect(person.age).to.be.greaterThan(20);
    })
})
```

Result:

```

  test with array of data
    ✓ test each person object in the array
    ✓ test each person object in the array


  2 passing (14ms)
  ```