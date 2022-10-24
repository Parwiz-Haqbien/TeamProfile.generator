const Intern = require('../lib/Intern');

describe('Intern' , () => {

    test("it should return a school name", () => {
        const schoolName = "P-12"
        const chosenSchool = new Intern("Frank", 2, "frank@gmail.com", schoolName);
        expect(chosenSchool.getSchool()).toBe(schoolName)
    })
    test("it should return a role", () => {
        const role = "Intern"
        const roleGiven = new Intern("Frank", 2, "frank@gmail.com", role);
        expect(roleGiven.getRole()).toBe(role)
    })
})