const Engineer = require('./main/lib/Engineer');
const Manager = require('./main/lib/Manager');
const Intern = require('./main/lib/Intern');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');


const outPutDirection = path.resolve(__dirname, 'outPut');
const outPutPath = path.resolve( outPutDirection, 'teamProfile.html');