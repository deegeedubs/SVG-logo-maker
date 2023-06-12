const Square = require("../lib/square.js");

describe("Square", () => {
    describe("render", () => {
        it("Should render HTML", () => {
            const square = new Square();
            expect(()=> {square.render()}).toBeTruthy();
        })
    })
})