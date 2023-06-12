const { createLogo } = require("../lib/logo.js");

describe("Logo", () => {
    describe("createLogo", () => {
        it("Should render html", () => {
            expect(()=> {return createLogo("DGW", "White", "Circle", "Blue")}).toBeTruthy();
        });
    });
});