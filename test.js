const expect = require('chai').expect;
const validator = require(".");

describe('Testing printMsg function, should return "Hello World!" ', () => {
	it('Should Return Hello World!', () => {
         	expect(validator.printMsg()).to.equal("Hello World!");
	});
});