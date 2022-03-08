class Employee {
  constructor(firstName, lastName, key, dateOfBirthIsoString, image) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.key = key;
    this.dateOfBirth = new Date(dateOfBirthIsoString);
    this.image = image;
  }

  /**
   * Calculates the age of the employee.
   * @returns the age of the employee in years (number)
   */
  getAge() {
    const now = new Date();
    const age = now.getFullYear() - this.dateOfBirth.getFullYear();
    return age;
  }

  /**
   * @returns full name of the employee (firstName lastName)
   */
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

async function startApp() {
  console.log("--- Employee Management ---");
  await loadEmployeeList();
  clearDetail();
}

async function loadEmployeeList() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = null;

  const employees = await loadEmployeesAsync();
  renderEmployeeList(employees);
}

async function loadEmployeesAsync() {
  const response = await fetch("http://localhost:3000/employees");
  const jsonData = await response.json();
  const employees = jsonData.map(
    (data) =>
      new Employee(
        data.firstName,
        data.lastName,
        data.key,
        data.dateOfBirth,
        data.image
      )
  );
  return employees;
}

function renderEmployeeList(employees) {
  const listElement = document.getElementById("list");
  for (const employee of employees) {
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    listItem.addEventListener("click", (event) =>
      renderDetail(employee, event)
    );

    const keyItem = document.createElement("div");
    keyItem.className = "list-item-key";
    keyItem.innerText = employee.key;
    listItem.appendChild(keyItem);
    const nameItem = document.createElement("div");
    nameItem.className = "list-item-name";
    nameItem.innerText = employee.getFullName();
    listItem.appendChild(nameItem);

    listElement.appendChild(listItem);
  }
}

function renderDetail(employee, event) {
  setActiveListItem(event.currentTarget);
  hideAdd();
  document.getElementById("avatar").src = employee.image;
  document.getElementById("key").innerHTML = employee.key;
  document.getElementById("name").innerHTML = employee.getFullName();
  const dateOfBirth = new Date(employee.dateOfBirth);
  document.getElementById("birthday").innerHTML =
    dateOfBirth.toLocaleDateString("de-AT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  document.getElementById("age").innerHTML = `Age: ${employee.getAge()}`;
  document.getElementById("delete").onclick = () =>
    deleteEmployee(employee.key);
  document.getElementById("add").onclick = () => showAdd();

  document.getElementById("delete").style = "display: visibility";
  document.getElementById("add").style = "display: visibility";
}

function setActiveListItem(element) {
  const activeClassName = "active-list-item";
  const activeElements = document.getElementsByClassName(activeClassName);
  for (const activeElement of activeElements) {
    activeElement.classList.remove(activeClassName);
  }

  if (element) {
    element.classList.add(activeClassName);
  }
}

function showAdd() {
  const addContainer = document.getElementById("add-container");
  const detailsContainer = document.getElementById("details-container");

  addContainer.style = "display: visibility";
  detailsContainer.style = "display: none";
}

function hideAdd() {
  const addContainer = document.getElementById("add-container");
  const detailsContainer = document.getElementById("details-container");

  addContainer.style = "display: none";
  detailsContainer.style = "display: visibility";
}

async function createEmployee() {
  const firstName = document.getElementById("firstNameInput").value;
  const lastName = document.getElementById("lastNameInput").value;
  const key = document.getElementById("keyInput").value;
  const dateOfBirth = document.getElementById("dateOfBirthInput").value;

  const request = new Request("http://localhost:3000/employees", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      key,
      dateOfBirth,
      image: "placeholder.gif",
    }),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  await fetch(request);

  await loadEmployeeList();
  hideAdd();
}

async function deleteEmployee(employeeKey) {
  const request = new Request(
    `http://localhost:3000/employees?key=${employeeKey}`,
    {
      method: "DELETE",
      mode: "cors",
    }
  );
  await fetch(request);
  await loadEmployeeList();
  clearDetail();
}

function clearDetail() {
  setActiveListItem();
  document.getElementById("avatar").src = null;
  document.getElementById("key").innerHTML = null;
  document.getElementById("name").innerHTML = null;
  document.getElementById("birthday").innerHTML = null;
  document.getElementById("age").innerHTML = null;
  document.getElementById("delete").style = "display: none";
  document.getElementById("add").style = "display: visibility";
  document.getElementById("add").onclick = () => showAdd();
}
