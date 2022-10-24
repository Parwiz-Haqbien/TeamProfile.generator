const Engineer = require('../lib/Engineer');

describe('Engineer' , () => {

    test("it should return a github username", () => {
        const gitUsername = "Parwiz$1"
        const chosenGit = new Engineer("Frank", 2, "frank@gmail.com", gitUsername);
        expect(chosenGit.getGithub()).toBe(gitUsername)
    })
    test("it should return a role", () => {
        const role = "Engineer"
        const roleGiven = new Engineer("Frank", 2, "frank@gmail.com", role);
        expect(roleGiven.getRole()).toBe(role)
    })
})