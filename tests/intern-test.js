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
//     test("should costruct a new instance of an intern class with name,id,email",() => {
//         const intern = new Intern(mockIntern);
//         expect(intern).toEqual({
//             name:"John",
//             is:120,
//             email:"john3@gatech.edu",
//             school:"GT",
//             role: "Intern",
//         });
//     });
// });
// describe("method tets",() => {
//     tets("should retun id when the getId method is called",() => {
//         const intern = new Intern(mochIntern);
//         expect(intern.getId()).toBeInstanceOf(120);
//     });
//     test("test should retun name when getName method is called",() => {
//         const intern = new Intern(mockIntern);
//         expect(intern.getName()).toEqual("John");
// });
// test("test should retun email when getEmail method is called",() => {
//     const intern = new Intern(mockIntern);
//     expect(intern.getEmail()).toEqual("John3@gatech.edu");
// });
// test("test should retun school when getSchool method is called",() => {
//     const intern = new  Intern(mockIntern);
//     expect(intern.getSchool()).toEqual("GT");
// });
// test("test should retun intern rol when getRole method is called",() => {
//     const intern = new Intern(mochIntern);
//     expect(intern.getRole()).toEqual("Intern");
// });
// });
// });