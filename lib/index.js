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
        it(desc, function () {
            return callback(val);
        });
    });

}

function callItAsync(desc, data, callback) {
    data.forEach(function (val) {
        it(desc, function (done) {
            callback(done, val);
        });
    });
}

module.exports = {
    itParam,
}
