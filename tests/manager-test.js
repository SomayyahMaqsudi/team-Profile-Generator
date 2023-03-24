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
    test("should costruct a new instance of an intern class with name,id,email, officenUmber",() => {
        const manager = new Manager(mochManager);
        expect(manager).toEqual({
            name:"Kate",
            is:130,
            email:"kate3@gatech.edu",
            officeNumber: 133,
            role: "Manager",
        });
    });
});
describe("method tets",() => {
    tets("should retun id when the getId method is called",() => {
        const manager = new Manager(mochManager);
        expect(manager.getId()).toEqual(130);
    });
    tets("should retun name when the getName method is called",() => {
        const manager = new Manager(mochManager);
        expect(manager.getName()).toEqual("Kate");
    });
    tets("should retun email when the getEmail method is called",() => {
        const manager = new Manager(mochManager);
        expect(manager.getEmail()).toEqual("kate3@gatech.edu");
    });
    tets("should retun office number when the getOffice method is called",() => {
        const manager = new Manager(mochManager);
        expect(manager.getOffice()).toEqual("133");
    });
    tets("should retun role when the getRole method is called",() => {
        const manager = new Manager(mochManager);
        expect(manager.getRole()).toEqual("Manager");
    });
});
});