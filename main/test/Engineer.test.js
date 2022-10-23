const Engineer = require('../lib/Engineer');
const Employee = require('./Employee.test')

describe('Engineer'  ,() => {
    test('it should return a github username' , () => {
        const information = new Engineer('Parwiz$1')
        expect(information.getGithub()).toBe('Parwiz$1')

    expect(information).toBeInstanceOf(Employee)
    })
})