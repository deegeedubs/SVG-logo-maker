const Circle = require("../lib/circle.js");

describe("Circle", () => {
    describe("render", () => {
        it("Should render HTML", () => {
            const circle = new Circle();
            expect(()=> {circle.render()}).toBeTruthy();
        })
    })
})