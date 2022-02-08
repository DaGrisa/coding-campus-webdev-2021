console.log("--- Employees ---");

const fileSystem = require("fs");

const rawdata = fileSystem.readFileSync("employees.json");
const employees = JSON.parse(rawdata);

for (const employee of employees) {
  const key = employee.key;
  const firstName = employee.firstName;
  const lastName = employee.lastName;
  console.log(`${key} - ${firstName} ${lastName}`);
}
