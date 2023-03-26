const Employee = require("../class/employee");
describe("Employee",() => {
const mockEmployee={
    name: "Somayyah",
    id: 100,
    email: "smaqsudi3@gatech.edu",
};
describe("constructor tests",() => {
    test("should construct a new instance of an employee class",() => {
        const employee = new Employee(mockEmployee);
        expect(employee).toBeInstanceOf(Employee);
    });
   
});
})