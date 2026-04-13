import {assert, asset} from "chai";
import { mathEnforcer } from ".\mathEnforcer.js";

describe("add five functionality", ()=> {
    it("test with invalid value", ()=> {
        assert.isUndefined(mathEnforcer.addFive("pesho"), "result must be undefined");
        assert.isUndefined(mathEnforcer.addFive(["pesho"]), "undefined");
        assert.isUndefined(mathEnforcer.addFive({name: "Gosho"}), "undefined");
    });

    it("test with valid value", ()=> {
        assert.equal(mathEnforcer.addFive(0), 5);
        assert.equal(mathEnforcer.addFive(-5), 0);
        assert.equal(mathEnforcer.addFive(-5.5), -0.5);
        assert.equal(mathEnforcer.addFive(-10), 5);
    });
});

describe("subtract ten functionality", ()=> {
    describe("should return undefined when input is not a number", ()=> {
        it("test with string", ()=> {
            assert.isUndefined(mathEnforcer.substractTen("pesho"));
            assert.isUndefined(mathEnforcer.substractTen("-6"));
        });

        it("test with array", ()=> {
            assert.isUndefined(mathEnforcer.substractTen([5]));
            assert.isUndefined(mathEnforcer.substractTen([]));
        });

        it("test with object", ()=> {
            assert.isUndefined(mathEnforcer.substractTen({}));
        });
    });

    describe("should return input minus 10 when input is number", ()=> {
        it("test with negative value", ()=> {
            assert.equal(mathEnforcer.substractTen(-10), -20);
            assert.equal(mathEnforcer.substractTen(-0.5), -10.5);
        });

        it("test with zero", ()=> {
            assert.equal(mathEnforcer.substractTen(0), -10);
            assert.equal(mathEnforcer.substractTen(10), 0);
        });

        it("test with positive number", ()=> {
            assert.equal(mathEnforcer.substractTen(10.5), 0.5);
            assert.equal(mathEnforcer.substractTen(20), 10);
            assert.equal(mathEnforcer.substractTen(5), -5);
        });
    });
});

describe("sum functionality", ()=> {
    describe("shuld return undefined when input is not a number(only one parameter)", ()=> {
        it("test with string", ()=> {
            assert.isUndefined(mathEnforcer.sum(5, "5"));
            assert.isUndefined(mathEnforcer.sum("5", 6));
        });

        it("test with array", ()=> {
            assert.isUndefined(mathEnforcer.sum([5], 5));
            assert.isUndefined(mathEnforcer.sum(5, [6]));
        });

        it("test with objact", ()=> {
            assert.isUndefined(mathEnforcer.sum({}), 5);
            assert.isUndefined(mathEnforcer.sum(5, {}));
        });
    });

    describe("should return undefined when input is not a number(two parameters)", ()=> {
        it("test with string", ()=> {
            assert.isUndefined(mathEnforcer.sum("5", "5"));
        });

        it("test with array", ()=> {
            assert.isUndefined(mathEnforcer.sum([], [5]));
        });

        it("test. with object", ()=> {
            assert.isUndefined(mathEnforcer.sum({}, {}));
        });
    });

    describe("should return correct sum with valid value", ()=> {
        it("test with negative value", ()=> {
            assert.equal(mathEnforcer.sum(10, -10), 0);
            assert.equal(mathEnforcer.sum(0, 0.5), 0.5);
            assert.equal(mathEnforcer.sum(-0.5, 0.5), 0);
            assert.equal(mathEnforcer.sum(0.0), 0);
            assert.equal(mathEnforcer.sum(-10.5, -10), -20.5);
        });

        it("test with positive value", ()=> {
            assert.equal(mathEnforcer.sum(10, 0), 10);
            assert.equal(mathEnforcer.sum(0.5, 0.5), 1);
            assert.equal(mathEnforcer.sum(10, 10), 20);
        });
    });
});