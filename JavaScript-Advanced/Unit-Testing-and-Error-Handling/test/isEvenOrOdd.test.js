import {assert, expect} from "chai";
import isOddOrEven from "./isEvenOrOdd.js";

describe("main test", ()=> {
    it("test with non string value", ()=> {
        assert.equal(isOddOrEven(12345), undefined, "result must be undefined");
        assert.isNotOk(isOddOrEven(["Pesho"], "result ..... undefined"));
        assert.isUndefined(isOddOrEven(12345));
        expect(isOddOrEven({name: "Gosho"})).to.be.undefined
    });

    it("test with valid value and odd length", ()=> {
        assert.equal(isOddOrEven("Pesho"), "odd", "");
        assert.strictEqual(isOddOrEven("Todor"), "odd");
    });

    it("test with valid value and even length", ()=> {
        assert.equal(isOddOrEven("Todor1"), "even");
        assert.equal(isOddOrEven("pesho1"), "even");
    });
});