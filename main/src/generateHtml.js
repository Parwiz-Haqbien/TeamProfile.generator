const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function renderManager(managerData) {

    const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber);

    return ` <div class="card-header">
    <h2 class="card-title">${managerName}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
</div>
</div>
    `;
}

function renderEngineer(newEngineer) {

    if (newEngineer) {

        const engineer = new Engineer(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github);


        return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" rel="noopener noreferrer">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `;
} else {
    return ``;
}
}