const Employees = require("../class/employee");
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
    test("should costruct a new instance of an employee class with name,id,email",() => {
        const employee = new Employee(mockEmployee);
        expect(employee).toEqual({
            name:"Somayyah",
            is:100,
            email:"smaqsudi3@gatech.edu",
        });
    });
});
describe("method tets",() => {
    tets("should retun id when the getId method is called",() => {
        const employee = new Employee(mockEmployee);
        expect(employee.getId()).toBeInstanceOf(100);
    });
    test("test should retun name when getName method is called",() => {
        const employee = new Employee(mockEmployee);
        expect(employee.getName()).toEqual("Somayyah");
});
test("test should retun email when getEmail method is called",() => {
    const employee = new Employee(mockEmployee);
    expect(employee.getEmail()).toEqual("smaqsudi3@gatech.edu");
});
});
});