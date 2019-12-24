describe("LoadUser", function () {

	const sinon = require('sinon')
	const chai = require('chai')
	const sinonChai = require('sinon-chai')

	before(function () {
  		chai.use(sinonChai)
	})

	beforeEach(function () {
  		this.sandbox = sinon.sandbox.create()
	})

	afterEach(function () {
  		this.sandbox.restore()
	})


    it("Proceeds first user loading", function () {
        assert.equal(LoadUser(1), 1);
    });
    it("Proceeds thecond user loading", function () {
        assert.equal(LoadUser(2), 2);
    });
    it("Proceeds third user loading", function () {
        assert.equal(LoadUser(3), 3);
    });
    it("Proceeds fourth user loading", function () {
        assert.equal(LoadUser(4), 4);
    });
    it("Proceeds undefined user loading", function () {
        assert.equal(LoadUser('qwerty'), undefined);
    });
});
