const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
    describe("render", () => {
        it("Should render HTML", () => {
            const triangle = new Triangle();
            expect(()=> {triangle.render()}).toBeTruthy();
        })
    })
})