/*
 * Wrap calls to mocha "it" function in a forEach loop
 */

/*
 * The library is wrapped in a function (IIFE) that allows
 * mocha param to be required simply by using require('mocha-param')
 * but ensures backwards compatibility with those still using require('mocha-param').itParam
 */
module.exports = function (desc, data, callback) {
	const wrapper = run;
	wrapper.itParam = run;
	
	Object.keys(it).forEach(utility => {
		run[utility] = (desc, data, callback) => run(desc, data, callback, it[utility]);
	});
	
    return wrapper;
}()

/*
 * Call mocha "it" function either sync or async depending
 * on whether callback has one or two params
 */
function run(desc, data, callback, executor) {
    if (callback.length === 2) {
        callItAsync(executor || it, desc, data, callback)
    } else {
        callItSync(executor || it, desc, data, callback)
    }
}

function callItSync(executor, desc, data, callback) {
    data.forEach(function (val) {
        executor(renderTemplate(desc, val), function () {
            return callback.bind(this)(val);
        });
    });

}

function callItAsync(executor, desc, data, callback) {
    data.forEach(function (val) {
        executor(renderTemplate(desc, val), function (done) {
            callback.bind(this)(done, val);
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
