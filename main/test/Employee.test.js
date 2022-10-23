const Employees = require('../lib/Employess');
describe('emplyee',() => {
    test('it should return a name' , () => {
    const example = new Employees('John' , '5' , 'parwiz@gmail.com')
        expect(example.getName()).toBe('John')
    });
    test('it should return an id', () => {
        const example = new Employees('John' , '5' , 'parwiz@gmail.com')
        expect(example.getId()).toBe('5')
    });
    test('it should return a email', () => {
        const example = new Employees('John' , '5' , 'parwiz@gmail.com')
        expect(example.getEmail()).toBe('parwiz@gmail.com')
    });
    test('it should return a role', () => {
        const example = new Employees('John' , '5' , 'parwiz@gmail.com ,')
        expect(example.getRole()).toBe('Employee')
    })
});