const Manager = require('../lib/Manager');


describe('Manager' , () => {
    test("it should return a role", () => {
        const role = "Manager"
        const roleGiven = new Manager("Frank", 2, "frank@gmail.com", role);
        expect(roleGiven.getRole()).toBe(role)
    })

})