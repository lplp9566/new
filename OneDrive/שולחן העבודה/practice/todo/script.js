const inputField = document.getElementById("input");
const addButton = document.getElementById("btn");
const table = document.getElementById("table");
// const teblerue = document.getElementById("first")

let  toDos = JSON.parse(localStorage.getItem("toDos"));
if (!toDos){
    toDos =[]
}
let idCounter = toDos.length+1;


addButton.addEventListener("click", () => {
  const toDo = {
    id: idCounter,
    Text: inputField.value,
    status: false,
  };

  if (inputField.value !== "") {
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }
  inputField.value = "";
  //   idCounter +=1;
  showall();
});

function showall() {
  toDos.forEach((el, idx) => {
    const tr = document.createElement("tr");
    const id = document.createElement("td");
    const text = document.createElement("td");
    const status = document.createElement("td");
    const action = document.createElement("td");

    id.innerText = el.id;
    text.innerText = el.Text;
    status.innerText = el.status ? "done" : "todo";

    const editbut = document.createElement("button");
    const deletebut = document.createElement("button");
    const changeStatus = document.createElement("button");

    editbut.innerText = "edit";
    deletebut.innerText = "delete";
    changeStatus.innerText = "change status";

    editbut.addEventListener("click", () => edit(idx));
    deletebut.addEventListener("click", () => deleteItem(idx));
    changeStatus.addEventListener("click", () => chengeStatus(idx));

    action.appendChild(editbut);
    action.appendChild(deletebut);
    action.appendChild(changeStatus);

    tr.appendChild(id);
    tr.appendChild(text);
    tr.appendChild(status);
    tr.appendChild(action);
    action.setAttribute("class", "action");
    status.setAttribute("class", "status");
// table.appendChild(teblerue)
    table.appendChild(tr);
    sortAll()
  });
}

function edit(index) {
  // const elment = toDos.find(elm => {elm.id === index})
  const newFind = toDos[index];
  if (inputField.value !== "") {
    // const find = toDos.find(elm => {elm.id ==index})
    toDos.splice(index, 1);
    table.innerText = "";
    const editToDo = {
      id: newFind.id,
      Text: inputField.value,
      status: newFind.status,
    };
    inputField.value !== "";
    toDos.push(editToDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
    inputField.value = "";
    showall();
  }
}


function chengeStatus(index) {
  const sta = toDos[index];
  const newText = sta.Text

  table.innerText = "";
  const editsta = {
    id: sta.id,
    Text: newText,
    status: "done",
  };
  toDos.splice(index, 1);
  toDos.push(editsta);
  
  localStorage.setItem("toDos", JSON.stringify(toDos));
  showall();
console.log(sta.Text)
}

function deleteItem(index) {
  //    const findind = toDos.findIndex(elmm => {elmm.id == index})
  const find = toDos.find((elm) => {
    elm.id == index;
  });
  toDos.splice(index, 1);
  localStorage.clear();
  table.innerText = "";
  localStorage.setItem("toDos", JSON.stringify(toDos));
  console.log(toDos[index]);
  showall();
}

function sortAll(){
     const list = [] 
    toDos.forEach((element)=> {
        list.push(element.Text)

    })
    console.log(list)
}
showall();
