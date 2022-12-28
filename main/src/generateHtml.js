const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function renderManager(managerData) {

    const manager = new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.officeNumber);

    return ` <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card employee-card">
    <div class="card-header">
    <h2 class="card-title">${manager.name}</h2>
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


        return `
        <div class="card employee-card">
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

function renderIntern(newIntern) {


    if (newIntern) {

        const intern = new Intern(newIntern.name, newIntern.id, newIntern.email, newIntern.school);

        return `
        <div class="card employee-card">
        <div class="card-header">
          <h2 class="card-title">${intern.name}</h2>
         <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h3>
        </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID:  ${intern.id} </li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}@gmail.com</a></li>
        <li class="list-group-item">School:  ${intern.school} </li>
        </ul>
     </div>
      </div>
        </div>
    </div>
</div>
    `;
    } else {
        return ``;
    }

}

//creating function that will show the output html that will be generated

function generateHtml(managerData, allEngineers, allInterns) {

    return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                ${renderManager(managerData)}
                ${allEngineers.map(renderEngineer)}
                ${allInterns.map(renderIntern)}
                </div>
            </div>
        </div>
    </body>
    
    </html>
  `;
}

module.exports = generateHtml;
