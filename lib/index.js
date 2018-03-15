/*
 * Wrap calls to mocha "it" function in a forEach loop
 */

/*
 * Call mocha "it" function either sync or async depending
 * on whether callback has one or two params
 */
function itParam(desc, data, callback) {
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

function renderTemplate(template, value) {
    return eval('`' + template + '`;')
}

module.exports = {
    itParam,
}
