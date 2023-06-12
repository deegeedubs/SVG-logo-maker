const Shape = require("../lib/shape.js");

describe("Shape", () => {
    describe("render", () => {
        it("Should throw an error when called directly", () => {
            const shape = new Shape();
            expect(()=> {shape.render()}).toThrow();
        })
    })
})