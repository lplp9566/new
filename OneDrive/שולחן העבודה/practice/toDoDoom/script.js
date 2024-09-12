
const inputField = document.getElementById("input");
const addButton = document.getElementById("btn");
const table = document.getElementById("table");
const toDos = JSON.parse(localStorage.getItem('toDos'))|| [];
let idCounter = 1;
addButton.addEventListener("click", () => {
    debugger
  const toDo = {
    id: idCounter,
    Text: inputField.value,
    status: false,
  };
  if (inputField.value !== ""){
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }
  inputField.value = "";
  idCounter++;
});

function showall() {
  table.innerHTML = "";
  toDos.forEach((el) => {
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    const text = document.createElement("td");
    const status = document.createElement("td");
    const action = document.createElement("td");

    id.innerText = el.id;
    text.innerText = el.Text;
    status.innerText = el.status ? "done" : "pael";

    const editbut = document.createElement("button");
    const deletebut = document.createElement("button");
    const changeStatus = document.createElement("button");

    editbut.innerText = "edit";
    deletebut.innerText = "delete";
    changeStatus.innerText = "change status";

    action.appendChild(editbut);
    action.appendChild(deletebut);
    action.appendChild(changeStatus);

    tr.appendChild(id);
    tr.appendChild(text);
    tr.appendChild(status);
    tr.appendChild(action);

    table.appendChild(tr);
  });
}

