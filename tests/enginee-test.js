const Engineer = require("../class/engineer");
describe("Engineer",() => {
const mockEngineer={
    name: "Sam",
    id: 110,
    email: "sam3@gatech.edu",
    github:"www.github.com/sam",
};
describe("constructor tests",() => {
    test("should construct a new instance of an engineer class",() => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer).toBeInstanceOf(Engineer);
    });
    test("should costruct a new instance of an engineer class with name,id,email,github,role",() => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer).toEqual({
            name:"Sam",
            is:110,
            email:"sam3@gatech.edu",
            github:"www.github.com/sam",
            role:"Engineer",
        });
    });
});
describe("method tets",() => {
    tets("should retun id when the getId method is called",() => {
        const engineer = new Engineer(mochEngineer);
        expect(engineer.getId()).toBeInstanceOf(110);
    });
    test("test should retun name when getName method is called",() => {
        const engineer = new Engineer(mockEngineer);
        expect(engineer.getName()).toEqual("Sam");
});
test("test should retun email when getEmail method is called",() => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getEmail()).toEqual("sam3@gatech.edu");
});
test("test should retun github URL when getGithub method is called",() => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getGithub()).toEqual("www.github.com/sam");
});
test("test should retun engineer role when getRole method is called",() => {
    const engineer = new Engineer(mockEngineer);
    expect(engineer.getRole()).toEqual("engineer");
});
});
});