const Intern = require("../class/intern");
describe("Intern",() => {
const mochIntern={
    name: "John",
    id: 120,
    email: "john3@gatech.edu",
    school:"GT",
};
describe("constructor tests",() => {
    test("should construct a new instance of an intern class",() => {
        const intern = new Intern(mockIntern);
        expect(intern).toBeInstanceOf(Intern);
    });
});
})