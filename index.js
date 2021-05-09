var inputField = document.getElementById("inputText");
var addToDoButton = document.getElementById("addTodoButton");
var ContainerList = document.getElementById("toDoContainer");

addToDoButton.addEventListener("click", InputText);

function InputText() {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    createDiv();
  }
}

function createDiv(event) {
  var divTag = document.createElement("div");
  divTag.setAttribute("align", "center");
  divTag.style.margin = "0px auto";
  document.body.appendChild(divTag);

  const list = document.createElement("li");
  list.className = "list-group";
  const text = document.createTextNode(inputField.value);
  text.innerText = inputField.value;
  inputField.value = "";
  list.appendChild(text);
  document.body.appendChild(list);
  divTag.appendChild(list);

  const editbutton = document.createElement("Button");
  editbutton.className = "btn btn-success";
  editbutton.setAttribute("value", "Edit");
  editbutton.innerHTML = "Edit";
  document.body.appendChild(editbutton);
  list.appendChild(editbutton);
  divTag.appendChild(editbutton);
  editbutton.onclick = editTask;

  const deletebtn = document.createElement("Button");
  deletebtn.className = "btn btn-success";
  deletebtn.setAttribute("type", "reset");
  deletebtn.innerHTML = "Delete";
  document.body.appendChild(deletebtn);
  divTag.appendChild(deletebtn);
  deletebtn.onclick = deleteItem;
  function deleteItem() {
    divTag.remove(this);
    console.log("hello");
  }

  const taskList = document.querySelector("ul");
  taskList.addEventListener(
    "click",
    function (ev) {
      if (ev.target === list) {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
  ContainerList.appendChild(divTag);
}

var editTask = function () {
  console.log("Edit Task...");
  console.log("Change 'edit' to 'save'");

  var list = this.parentNode;

  var editInput = list.querySelector("input[type=text]");

  var containsClass = list.classList.contains("editMode");

  if (containsClass) {
    list.innerText = editInput.value;
  } else {
    editInput.value = list.innerText;
  }

  list.classList.toggle("editMode");
};
