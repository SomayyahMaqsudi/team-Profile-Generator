const Engineer = require("../class/engineer");
describe("Engineer",() => {
const mochEngineer={
    name: "Somayyah",
    id: 100,
    email: "smaqsudi3@gatech.edu",
};
describe("constructor tests",() => {
    test("should construct a new instance of an employee class",() => {
        const engineer = new Engineer(mochEngineer);
        expect(engineer).toBeInstanceOf(Engineer);
    });
   
});
})