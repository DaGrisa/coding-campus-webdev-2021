console.log("--- Employees ---");

const fileSystem = require("fs");

const rawdata = fileSystem.readFileSync("employees.json");
const employees = JSON.parse(rawdata);
console.log(employees);
