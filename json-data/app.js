async function startApp() {
  console.log("--- Employee Management ---");
  const employees = await loadEmployeesAsync();
  renderEmployeeList(employees);
}

async function loadEmployeesAsync() {
  const response = await fetch(
    "http://127.0.0.1:5500/json-data/employees.json"
  );
  const employees = await response.json();
  return employees;
}

function renderEmployeeList(employees) {
  const listElement = document.getElementById("list");
  for (const employee of employees) {
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    listItem.addEventListener("click", () => renderDetail(employee));

    const keyItem = document.createElement("div");
    keyItem.className = "list-item-key";
    keyItem.innerText = employee.key;
    listItem.appendChild(keyItem);
    const nameItem = document.createElement("div");
    nameItem.className = "list-item-name";
    nameItem.innerText = `${employee.firstName} ${employee.lastName}`;
    listItem.appendChild(nameItem);

    listElement.appendChild(listItem);
  }
}

function renderDetail(employee) {
  document.getElementById("avatar").src = employee.image;
  document.getElementById("key").innerHTML = employee.key;
  document.getElementById(
    "name"
  ).innerHTML = `${employee.firstName} ${employee.lastName}`;
  const dateOfBirth = new Date(employee.dateOfBirth);
  document.getElementById("birthday").innerHTML =
    dateOfBirth.toLocaleDateString("de-AT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
}
