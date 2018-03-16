/*
 * Wrap calls to mocha "it" function in a forEach loop
 */

/*
 * The library is wrapped in a function (IIFE) that allows
 * mocha param to be required simply by using require('mocha-param')
 * but ensures backwards compatibility with those still using require('mocha-param').itParam 
 */
module.exports = function (desc, data, callback) {

    let wrapper = function (desc, data, callback) {
        run(desc, data, callback);
    };

    wrapper.itParam = run;
    return wrapper;
}()

/*
 * Call mocha "it" function either sync or async depending
 * on whether callback has one or two params
 */
function run(desc, data, callback) {
    if (callback.length === 2) {
        callItAsync(desc, data, callback)
    } else {
        callItSync(desc, data, callback)
    }
}

function callItSync(desc, data, callback) {
    data.forEach(function (val) {
        it(renderTemplate(desc, val), function () {
            return callback(val);
        });
    });

}

function callItAsync(desc, data, callback) {
    data.forEach(function (val) {
        it(renderTemplate(desc, val), function (done) {
            callback(done, val);
        });
    });
}

/*
 * Add value to description 
 */
function renderTemplate(template, value) {
    try {
        return eval('`' + template + '`;')
    } catch (err) {
        return template;
    }
}