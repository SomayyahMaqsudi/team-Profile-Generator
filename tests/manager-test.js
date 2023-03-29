const Manager = require("../class/manager");
describe("Manager",() => {
const mochManager={
    name: "Kate",
    id: 130,
    email: "kate3@gatech.edu",
    officeNumber: 133,
};
describe("constructor tests",() => {
    test("should construct a new instance of an manager class",() => {
        const manager = new Manager(mochManager);
        expect(manager).toBeInstanceOf(Manager);
    });
});
})