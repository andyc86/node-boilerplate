let { stringReturn, testPromise } = require('./src/index');
let assert = require('assert');

describe('Testing Functions', () => {
    describe('stringReturn', () => {
        const stringVal = "My String";
        it(`should return '${stringVal}'`, () => {
            assert.equal(stringVal, stringReturn(stringVal));
        });
    });
    describe('testPromise', () => {
        it('should return `hello world`', () => {
            testPromise().then(res => {
                assert.equal('hello world', res);
            });
        });
    });
})